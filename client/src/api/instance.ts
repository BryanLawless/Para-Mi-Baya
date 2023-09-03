import axios from 'axios';
import { BACKEND_URL } from '@/config/config.js';
import { useAuthStore } from '@/stores/authStore';

const instance = axios.create({
	baseURL: BACKEND_URL + '/api/',
	headers: { 'Content-Type': 'application/json' },
	validateStatus: (status) => {
		return status >= 200 && status < 500;
	}
});

instance.interceptors.request.use(
	(config) => {
		const authStore = useAuthStore();

		if (authStore.isLoggedIn)
			config.headers.Authorization = `Bearer ${authStore.token}`;

		return config;
	},
	(error) => Promise.reject(error)
);

export default instance;
