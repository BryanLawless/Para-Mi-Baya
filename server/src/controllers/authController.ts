import httpStatus from 'http-status';
import { env } from '../config/config.js';
import { Request, Response } from 'express';
import { User } from '../types/userTypes.js';
import AuthService from '../services/authService.js';
import { sendResponse } from '../common/response.js';

export default class AuthController {
	static async login(req: Request, res: Response) {
		const { email, password } = req.body;

		const { event, data } = await AuthService.login({
			email: email,
			password: password
		} as User);

		switch (event) {
			case 'LOGIN_ERROR_INVALID_DETAILS':
				sendResponse(res, httpStatus.UNAUTHORIZED, 'Invalid login details.');
				break;
			case 'LOGIN_ERROR':
				sendResponse(
					res,
					httpStatus.INTERNAL_SERVER_ERROR,
					'An unexpected error occured.'
				);
			case 'LOGIN_SUCCESS':
				sendResponse(res, httpStatus.OK, '', data);
		}
	}

	static async register(req: Request, res: Response) {
		const { email, username, password, confirmPassword } = req.body;

		const { event, data } = await AuthService.register({
			email: email,
			username: username,
			password: password,
			confirmPassword: confirmPassword
		} as User);

		switch (event) {
			case 'REGISTER_ERROR_USER_EXISTS':
				sendResponse(res, httpStatus.CONFLICT, 'User email already exists.');
				break;
			case 'REGISTER_SUCCESS':
				sendResponse(res, httpStatus.OK, '', data);
				break;
		}
	}
}
