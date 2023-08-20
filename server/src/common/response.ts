import { Response } from 'express';

export function sendResponse(
	res: Response,
	statusCode: number,
	message: string,
	data: object = {}
) {
	let status = statusCode >= 200 && statusCode < 300;
	let sanitizedData = sanitizeResponseData(data);

	res.status(statusCode).json({
		code: statusCode,
		status: status,
		message: message,
		data: sanitizedData
	});
}

function sanitizeResponseData(data: object) {
	if (data.hasOwnProperty('_id')) {
		delete data['_id'];
	}

	if (data.hasOwnProperty('__v')) {
		delete data['__v'];
	}

	return data;
}
