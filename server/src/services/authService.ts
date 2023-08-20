import argon from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import UserRepo from '../repository/userRepo.js';
import { createTokens } from '../common/token.js';
import { Tokens, User } from '../types/userTypes.js';
import { serviceToController } from '../helpers/util.js';
import { ServiceToController } from '../types/generalTypes.js';

export default class AuthService {
	static async login(user: User): Promise<ServiceToController> {
		if (!(await UserRepo.existsEmail(user.email)))
			return serviceToController('LOGIN_ERROR_INVALID_DETAILS');

		const userData = await UserRepo.getByEmail(user.email);
		if (!userData) return serviceToController('LOGIN_ERROR');

		const passwordValid = await argon.verify(userData.password, user.password);
		if (!passwordValid)
			return serviceToController('LOGIN_ERROR_INVALID_DETAILS');

		delete userData.password;

		const userTokens = createTokens(userData.userId);
		userData.tokens = userTokens;

		return serviceToController('LOGIN_SUCCESS', userData);
	}

	static async register(user: User): Promise<ServiceToController> {
		if (await UserRepo.existsEmail(user.email))
			return serviceToController('REGISTER_ERROR_USER_EXISTS');

		const userId = uuidv4();
		const passwordHashed = await argon.hash(user.confirmPassword);

		const userData: User = {
			userId: userId,
			email: user.email,
			username: user.username,
			password: passwordHashed
		};

		UserRepo.create(userData);

		delete userData.password;

		const userTokens: Tokens = createTokens(userId);
		userData.tokens = userTokens;

		return serviceToController('REGISTER_SUCCESS', userData);
	}
}
