import joi, { ObjectSchema } from 'joi';

export const spotifyAcknowledgeSchema: ObjectSchema = joi.object().keys({
	accessToken: joi.string().required(),
	refreshToken: joi.string().required()
});
