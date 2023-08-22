import UserRepo from '../repository/userRepo.js';
import { serviceToController } from '../helpers/util.js';
import { ServiceToController } from '../types/generalTypes.js';

export default class SpotifyService {
	static async ackowlegdeService(
		userId: string,
		accessToken: string,
		refreshToken: string
	): Promise<ServiceToController> {
		if (!(await UserRepo.existsId(userId)))
			return serviceToController('ACKNOWLEGDE_ERROR_USER_NOT_FOUND');

		const userData = await UserRepo.updateSpotifyTokens(
			userId,
			accessToken,
			refreshToken
		);

		if (!userData) return serviceToController('ACKNOWLEGDE_ERROR');

		const spotifyTokens = {
			access: userData.spotifyAccess,
			refresh: userData.spotifyRefresh
		};

		return serviceToController('ACKNOWLEGDE_SUCCESS', {
			tokens: spotifyTokens
		});
	}
}
