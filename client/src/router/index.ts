import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		name: 'home',
		path: '/',
		component: () => import('@/views/Home.vue')
	},
	{
		name: 'login',
		path: '/login',
		component: () => import('@/views/Login.vue')
	},
	{
		name: '/listen',
		path: '/listen',
		component: () => import('@/views/Listen.vue')
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
