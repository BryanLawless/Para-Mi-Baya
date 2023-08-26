import { Request } from 'express';
import { Socket } from 'socket.io';
import session from 'express-session';
import { DecodedToken } from './userTypes.js';
export interface RequestExtended extends Request {
	files: Array<any>;
	user: DecodedToken;
	session: session.Session;
	sessionID: string;
}

export interface SocketExtended extends Socket {
	user: DecodedToken;
}
