import { Router } from 'express';
import AuthController from '../controllers/authController.js';
import { validateSchema } from '../middlewares/validateMiddleware.js';
import { registerSchema, loginSchema } from '../validations/authValidations.js';

const router = Router();

router.post('/login', validateSchema(loginSchema), AuthController.login);

router.post(
	'/register',
	validateSchema(registerSchema),
	AuthController.register
);

export default router;
