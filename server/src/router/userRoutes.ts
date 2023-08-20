import { Router } from 'express';
import { auth } from '../middlewares/authMiddleware.js';
import UserController from '../controllers/userController.js';

const router = Router();

router.get('/@me', auth, UserController.me);

export default router;
