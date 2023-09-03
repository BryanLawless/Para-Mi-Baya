import request from '@/api/request';
import httpStatus from 'http-status';
import { AUTH } from '@/constants/index';
import { redirect } from '@/helpers/util';
import { useAuthStore } from '@/stores/authStore';

export async function authGuard(to: any, from: any, next: Function) {
	const auth = useAuthStore();

	if (to.meta.auth == AUTH.REQUIRED && !auth.isLoggedIn) redirect('login');

	if (to.meta.auth == AUTH.NOT_REQUIRED && auth.isLoggedIn) redirect('home');

	if (auth.isLoggedIn && !auth.hasInfo) {
		const { status, response } = await request('users/@me', 'GET');
		if (status == httpStatus.OK) auth.setUser(response.data);
	}

	next();
}
