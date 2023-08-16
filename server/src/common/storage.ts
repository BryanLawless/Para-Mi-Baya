import path from 'path';
import multer, { File } from 'multer';
import Datauri from 'datauri/parser.js';

const dUri = new Datauri();
export const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

export function dataUri(file: File) {
	return dUri.format(path.extname(file.originalname).toString(), file.buffer);
}
