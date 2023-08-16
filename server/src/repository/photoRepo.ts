import { Photo } from '../types/photoTypes.js';
import PhotosModel from '../models/photoModel.js';

export default class PhotoRepo {
	static getPhotos(amount: number) {
		return PhotosModel.find({}).limit(amount);
	}

	static addPhoto(photo: Photo) {
		return PhotosModel.create(photo);
	}
}
