import { Schema, model } from 'mongoose';

const userSchema = new Schema({
	id: String,
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
	}
});

export default model('Users', userSchema);
