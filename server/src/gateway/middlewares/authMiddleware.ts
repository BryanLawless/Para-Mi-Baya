import jwt from 'jsonwebtoken';
import { jwtSecretKey } from '../../config/config.js';
import { DecodedToken } from '../../types/userTypes.js';
import { SocketExtended } from '../../types/extendTypes.js';

export function authSocket(socket: SocketExtended, next: Function) {
	if (socket.handshake.query && socket.handshake.query.token) {
		jwt.verify(
			socket.handshake.query.token,
			jwtSecretKey,
			function (err: Error, decoded: DecodedToken) {
				if (err) return new Error('unauthorized');

				socket.user = decoded;
				next();
			}
		);
	} else {
		next(new Error('authentication error'));
	}
}
