import { AUTH } from '@/constants/index.js';
import { TAB_TITLE } from '@/config/config';
import { authGuard } from '@/middlewares/authMiddleware';
import { setPageTitle } from '@/middlewares/titleMiddleware';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		name: 'home',
		path: '/',
		meta: {
			auth: AUTH.OPTIONAL,
			title: `${TAB_TITLE} | Home`
		},
		component: () => import('@/views/Home.vue')
	},
	{
		name: 'login',
		path: '/login',
		meta: {
			auth: AUTH.NOT_REQUIRED,
			title: `${TAB_TITLE} | Login`
		},
		component: () => import('@/views/Login.vue')
	},
	{
		name: 'register',
		path: '/register',
		meta: {
			auth: AUTH.NOT_REQUIRED,
			title: `${TAB_TITLE} | Register`
		},
		component: () => import('@/views/Register.vue')
	},
	{
		name: 'connections',
		path: '/connections/:id',
		meta: {
			auth: AUTH.REQUIRED,
			title: `${TAB_TITLE} | Connections`
		},
		component: () => import('@/views/Connections.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach(authGuard);
router.beforeEach(setPageTitle);

export default router;
