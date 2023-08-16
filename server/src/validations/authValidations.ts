import joi, { ObjectSchema, ValidationOptions } from 'joi';

export const registerSchema: ObjectSchema = joi.object().keys({
	username: joi.string().min(3).max(32).required(),
	password: joi.string().min(6).max(32).required(),
	confirmPassword: joi
		.any()
		.valid(joi.ref('password'))
		.required()
		.options({
			language: { any: { allowOnly: 'must match password' } }
		} as ValidationOptions)
});

export const loginSchema: ObjectSchema = joi.object().keys({
	username: joi.string().min(3).max(32).required(),
	password: joi.string().min(6).max(32).required()
});
