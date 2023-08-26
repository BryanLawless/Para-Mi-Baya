import { Router } from 'express';
import { auth } from '../middlewares/authMiddleware.js';
import SpotifyController from '../controllers/spotifyController.js';

const router = Router();

router.get('/login', SpotifyController.login);
router.get('/callback', SpotifyController.callback);
router.get('/acknowledge', auth, SpotifyController.acknowledge);

export default router;
