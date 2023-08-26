import { Server } from 'socket.io';
import spotifyApi from '../../common/spotify.js';
import UserRepo from '../../repository/userRepo.js';
import { SocketExtended } from '../../types/extendTypes.js';

export default class BaseHandler {
	static async getPlaying(io: Server, socket: SocketExtended, data: any) {
		if (!(await UserRepo.existsId(socket.user.userId)))
			return socket.emit('error', 'User not found');

		const user = await UserRepo.getById(socket.user.userId);

		spotifyApi.setAccessToken(user.spotifyAccess);
		spotifyApi.setRefreshToken(user.spotifyRefresh);

		const playingTrack = await spotifyApi.getMyCurrentPlayingTrack();

		console.log(playingTrack);
	}
}
