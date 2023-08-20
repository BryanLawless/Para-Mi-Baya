import joi, { ObjectSchema } from 'joi';

export const registerSchema: ObjectSchema = joi.object().keys({
	email: joi.string().email().required(),
	username: joi.string().min(3).max(32).required(),
	password: joi.string().min(6).max(32).required(),
	confirmPassword: joi.any().valid(joi.ref('password')).required()
});

export const loginSchema: ObjectSchema = joi.object().keys({
	email: joi.string().email().required(),
	password: joi.string().min(6).max(32).required()
});
