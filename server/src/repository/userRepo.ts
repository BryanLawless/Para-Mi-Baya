import { User } from '../types/userTypes.js';
import UsersModel from '../models/userModel.js';

export default class UserRepo {
	static create(user: User) {
		UsersModel.create({
			userId: user.userId,
			email: user.email,
			username: user.username,
			password: user.password
		});
	}

	static async getByEmail(email: string): Promise<User> {
		return await UsersModel.findOne({ email: email }).lean();
	}

	static async getById(userId: string): Promise<User> {
		return await UsersModel.findOne({ userId: userId }).lean();
	}

	static async existsEmail(email: string): Promise<boolean> {
		return await UsersModel.findOne({ email: email }).select('email').lean();
	}

	static async existsId(userId: string): Promise<boolean> {
		return await UsersModel.findOne({ userId: userId }).select('userId').lean();
	}
}
