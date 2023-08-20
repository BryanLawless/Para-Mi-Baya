import jwt from 'jsonwebtoken';
import { Tokens } from '../types/userTypes.js';
import { jwtSecretKey } from '../config/config.js';

export function createAccessToken(userId: string): string {
	var token = jwt.sign({ userId: userId, type: 'access' }, jwtSecretKey, {
		expiresIn: '30d'
	});

	return token;
}

export function createTokens(userId: string): Tokens {
	const accessToken = createAccessToken(userId);

	return { access: accessToken } as Tokens;
}
