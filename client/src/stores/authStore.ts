import { defineStore } from 'pinia';
import { User } from '@/types/userTypes';

interface AuthStore {
	user: User;
	token: string;
}

export const useAuthStore = defineStore('authStore', {
	state: (): AuthStore => {
		return {
			user: {} as User,
			token: localStorage.getItem('token') || ''
		};
	},
	getters: {
		isLoggedIn(state): boolean {
			return state.token.length > 0;
		},
		hasInfo(state): boolean {
			return Object.keys(state.user).length > 0;
		}
	},
	actions: {
		setUser(user: User) {
			this.user = user;
		},
		setToken(token: string) {
			this.token = token;
		}
	}
});
