import httpStatus from 'http-status';
import { Response } from 'express';
import UserService from '../services/userService.js';
import { sendResponse } from '../common/response.js';
import { RequestExtended } from '../types/extendTypes.js';

export default class UserController {
	static async me(req: RequestExtended, res: Response) {
		const { event, data } = await UserService.meService(req.user.userId);

		switch (event) {
			case 'USER_ERROR':
				sendResponse(
					res,
					httpStatus.INTERNAL_SERVER_ERROR,
					'An unexpected error occured.'
				);
				break;
			case 'USER_ERROR_NOT_FOUND':
				sendResponse(res, httpStatus.NOT_FOUND, 'User not found.');
			case 'USER_SUCCESS':
				sendResponse(res, httpStatus.OK, '', data);
				break;
		}
	}
}
