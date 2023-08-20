import { Schema } from 'joi';
import { sendResponse } from '../common/response.js';
import { NextFunction, Request, Response } from 'express';

export function validateSchema(schema: Schema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req.body, { abortEarly: false });

		if (error) {
			const errors = error.details.map((detail) => detail.message);

			return sendResponse(res, 422, errors[0]);
		}

		next();
	};
}
