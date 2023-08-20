export interface User {
	userId?: string;
	email: string;
	username: string;
	password: string;
	confirmPassword?: string;
	tokens?: Tokens;
}

export interface Tokens {
	access: string;
}

export interface DecodedToken {
	userId: string;
}
