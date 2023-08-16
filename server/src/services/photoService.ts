import { v2 as cloudinary } from 'cloudinary';
import { dataUri } from '../common/storage.js';
import { Photo } from '../types/photoTypes.js';
import PhotoRepo from '../repository/photoRepo.js';

export default class PhotoService {
	static async getPhotos(amount: number) {
		let photos: Photo[] = [];
		let fetchedPhotos: Photo[] = await PhotoRepo.getPhotos(amount);

		fetchedPhotos.forEach((photo: Photo) => {
			photos.push({
				id: photo.id,
				title: photo.title,
				description: photo.description,
				imageUrl: photo.imageUrl
			});
		});

		return fetchedPhotos;
	}

	static async addPhoto(file: any): Promise<Photo> {
		let fileData = dataUri(file).content;

		const result = await cloudinary.uploader.upload(fileData, {
			folder: `gallery`
		});

		let photo: Photo = {
			id: result.signature,
			imageUrl: result.secure_url
		};

		PhotoRepo.addPhoto(photo);

		return photo;
	}
}
