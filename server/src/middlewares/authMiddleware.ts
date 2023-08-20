import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import { jwtSecretKey } from '../config/config.js';
import { sendResponse } from '../common/response.js';
import { Response, NextFunction } from 'express';
import { RequestExtended } from '../types/extendTypes.js';

export function auth(req: RequestExtended, res: Response, next: NextFunction) {
	const bearerHeader: string | undefined = req.headers.authorization;
	if (typeof bearerHeader === 'undefined')
		return sendResponse(
			res,
			httpStatus.UNAUTHORIZED,
			'Authorization required.'
		);

	const bearerToken: string = bearerHeader.split(' ')[1].trim();
	if (bearerToken.length <= 0)
		return sendResponse(res, httpStatus.FORBIDDEN, 'Invalid token.');

	jwt.verify(bearerToken, jwtSecretKey, function (err: Error, decoded: any) {
		if (err) return sendResponse(res, httpStatus.FORBIDDEN, 'Invalid token.');

		if (decoded) req.user = decoded;

		next();
	});
}
