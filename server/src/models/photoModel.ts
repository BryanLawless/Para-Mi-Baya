import { Schema, model } from 'mongoose';

const photoSchema = new Schema({
	photoId: String,
	title: {
		type: String,
		required: false,
		maxLength: 32,
		default: ''
	},
	description: {
		type: String,
		required: false,
		maxLength: 255,
		default: ''
	},
	imageUrl: {
		type: String,
		required: true,
		maxLength: 255
	}
});

export default model('Photos', photoSchema);
