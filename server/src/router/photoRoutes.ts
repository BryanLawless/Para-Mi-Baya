import { Router } from 'express';
import { uploadMiddleware } from '../middlewares/uploadMiddleware.js';
import PhotoController from '../controllers/photoController.js';

const router = Router();

router.get('/', PhotoController.getPhotos);
router.post('/upload', uploadMiddleware, PhotoController.uploadPhotos);

export default router;
