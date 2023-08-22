import { Router } from 'express';
import { auth } from '../middlewares/authMiddleware.js';
import SpotifyController from '../controllers/spotifyController.js';
import { validateSchema } from '../middlewares/validateMiddleware.js';
import { spotifyAcknowledgeSchema } from '../validations/spotifyValidations.js';

const router = Router();

router.get('/login', SpotifyController.login);
router.get('/callback', SpotifyController.callback);
router.post(
	'/acknowledge',
	auth,
	validateSchema(spotifyAcknowledgeSchema),
	SpotifyController.acknowledge
);

export default router;
