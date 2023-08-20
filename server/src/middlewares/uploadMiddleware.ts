import fs from 'fs';
import { File } from 'multer';
import { upload } from '../common/storage.js';
import { Response, NextFunction } from 'express';
import { RequestExtended } from '../types/extendTypes.js';

export function uploadMiddleware(
	req: RequestExtended,
	res: Response,
	next: NextFunction
) {
	upload.array('files', 5)(req, res, (err: Error) => {
		if (err) return res.status(400).json({ error: err.message });

		const errors = [];
		const files = req.files;

		files.forEach((file: File) => {
			const allowedTypes = ['image/jpeg', 'image/png'];
			const maxSize = 5 * 1024 * 1024;

			if (!allowedTypes.includes(file.mimetype))
				errors.push(`invalid file type: ${file.originalname}`);

			if (file.size > maxSize)
				errors.push(`file too large: ${file.originalname}`);
		});

		if (errors.length > 0) {
			files.forEach((file: File) => fs.unlinkSync(file.path));

			return res.status(400).json({ errors });
		}

		req.files = files;

		next();
	});
}
