import { Router } from 'express';
import authRoutes from './authRoutes.js';
import photoRoutes from './photoRoutes.js';
import userRoutes from './userRoutes.js';

const router: Router = Router();

const defaultRoutes = [
	{
		path: '/photos',
		route: photoRoutes
	},
	{
		path: '/auth',
		route: authRoutes
	},
	{
		path: '/users',
		route: userRoutes
	}
];

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
