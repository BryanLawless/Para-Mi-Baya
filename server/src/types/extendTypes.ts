import { Request } from 'express';
import { DecodedToken } from './userTypes.js';
export interface RequestExtended extends Request {
	files: Array<any>;
	user: DecodedToken;
}
