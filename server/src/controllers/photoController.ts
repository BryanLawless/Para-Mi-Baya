import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { Photo } from '../types/photoTypes.js';
import { sendResponse } from '../common/response.js';
import PhotoService from '../services/photoService.js';
import { RequestExtended } from '../types/extendTypes.js';

export default class PhotoController {
	static async getPhotos(req: Request, res: Response) {
		let resources = await PhotoService.getPhotos(30);

		sendResponse(res, httpStatus.OK, 'Photos fetched successfully', resources);
	}

	static async uploadPhotos(req: RequestExtended, res: Response) {
		let photos: Photo[] = [];
		const files = req.files;

		for (let i = 0; i < files.length; i++) {
			let photo = await PhotoService.addPhoto(files[i]);

			photos.push(photo);
		}

		sendResponse(res, httpStatus.OK, 'File upload successful', { photos });
	}
}
