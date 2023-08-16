import { Router } from 'express';
import AuthController from '../controllers/authController.js';

const router = Router();

router.get('/login', AuthController.login);
router.post('/register', AuthController.register);

export default router;
