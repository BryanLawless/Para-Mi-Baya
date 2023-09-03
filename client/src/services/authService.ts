import request from '@/api/request';
import httpStatus from 'http-status';
import { Login, Register } from '@/types/authTypes';
import { serviceToView } from '@/helpers/util';
import { ServiceToView } from '@/types/generalTypes';

export default class AuthService {
	static async login(login: Login): Promise<ServiceToView> {
		const { status, response } = await request('auth/login', 'POST', {
			email: login.email,
			password: login.password
		});

		switch (status) {
			case httpStatus.UNAUTHORIZED:
				return serviceToView('LOGIN_ERROR_INCORRECT_DETAILS');
			case httpStatus.UNPROCESSABLE_ENTITY:
				return serviceToView('LOGIN_ERROR_INVALID_DETAILS');
			case httpStatus.OK:
				localStorage.setItem('token', response.data.tokens.access);

				return serviceToView('LOGIN_SUCCESS');
		}
	}

	static async register(register: Register): Promise<ServiceToView> {
		const { status, response } = await request('auth/register', 'POST', {
			email: register.email,
			username: register.username,
			password: register.password,
			confirmPassword: register.confirmPassword
		});

		switch (status) {
			case httpStatus.CONFLICT:
				return serviceToView('REGISTER_ERROR_USER_EXISTS');
			case httpStatus.UNPROCESSABLE_ENTITY:
				return serviceToView('REGISTER_ERROR_INVALID_DETAILS');
			case httpStatus.CREATED:
				localStorage.setItem('token', response.data.tokens.access);

				return serviceToView('REGISTER_SUCCESS');
		}
	}
}
