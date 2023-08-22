import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	userId: String,
	email: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 255
	},
	username: {
		type: String,
		required: true,
		minLength: 4,
		maxLength: 32
	},
	password: {
		type: String,
		required: true,
		maxLength: 255
	},
	spotifyAccess: {
		type: String,
		required: false,
		maxLength: 255,
		default: ''
	},
	spotifyRefresh: {
		type: String,
		required: false,
		maxLength: 255,
		default: ''
	}
});

export default model('Users', userSchema);
