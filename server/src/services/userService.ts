import UserRepo from '../repository/userRepo.js';
import { serviceToController } from '../helpers/util.js';
import { ServiceToController } from '../types/generalTypes.js';

export default class UserService {
	static async meService(userId: string): Promise<ServiceToController> {
		if (!(await UserRepo.existsId(userId)))
			return serviceToController('USER_ERROR_NOT_FOUND');

		const userData = await UserRepo.getById(userId);
		if (!userData) return serviceToController('USER_ERROR');

		delete userData.password;

		return serviceToController('USER_SUCCESS', userData);
	}
}
