export interface User {
	userId?: string;
	email: string;
	username: string;
	password: string;
	confirmPassword?: string;
	tokens?: Tokens;
	spotifyAccess?: string;
	spotifyRefresh?: string;
}

export interface Tokens {
	access: string;
}

export interface DecodedToken {
	userId: string;
}
