import { getPlayingEvent } from '../events.js';
import baseHandler from '../handlers/baseHandler.js';

export default [
	{
		name: getPlayingEvent,
		controller: baseHandler.getPlaying
	}
];
