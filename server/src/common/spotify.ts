import SpotifyWebApi from 'spotify-web-api-node';
import {
	spotifyClientId,
	spotifyClientSecret,
	spotifyRedirectUri
} from '../config/config.js';

export default new SpotifyWebApi({
	clientId: spotifyClientId,
	clientSecret: spotifyClientSecret,
	redirectUri: spotifyRedirectUri
});
