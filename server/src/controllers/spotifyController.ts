import httpStatus from 'http-status';
import { Request, Response } from 'express';
import spotifyApi from '../common/spotify.js';
import { clientUrl } from '../config/config.js';
import { sendResponse } from '../common/response.js';
import { RequestExtended } from '../types/extendTypes.js';
import SpotifyService from '../services/spotifyService.js';

export default class SpotifyController {
	static async login(req: Request, res: Response) {
		const scopes = [
			'user-read-private',
			'user-read-email',
			'user-read-currently-playing'
		];

		const authorizeURL = spotifyApi.createAuthorizeURL(scopes);

		res.redirect(authorizeURL);
	}

	static async callback(req: RequestExtended, res: Response) {
		if (!req.query.code) {
			sendResponse(res, httpStatus.BAD_REQUEST, 'No code provided.');
			return;
		}

		const data = await spotifyApi.authorizationCodeGrant(
			req.query.code as string
		);

		const { access_token, refresh_token } = data.body;

		req.session.spotifyAccess = access_token;
		req.session.spotifyRefresh = refresh_token;

		res.redirect(clientUrl);
	}

	static async acknowledge(req: RequestExtended, res: Response) {
		const { spotifyAccess, spotifyRefresh } = req.session;

		const { event, data } = await SpotifyService.ackowlegdeService(
			req.user.userId,
			spotifyAccess,
			spotifyRefresh
		);

		delete req.session.spotifyAccess;
		delete req.session.spotifyRefresh;

		switch (event) {
			case 'ACKNOWLEGDE_ERROR_USER_NOT_FOUND':
				sendResponse(res, httpStatus.NOT_FOUND, 'User not found.');
				break;
			case 'ACKNOWLEGDE_ERROR':
				sendResponse(
					res,
					httpStatus.INTERNAL_SERVER_ERROR,
					'An unexpected error occured.'
				);
				break;
			case 'ACKNOWLEGDE_SUCCESS':
				sendResponse(res, httpStatus.OK, '', data);
				break;
		}
	}
}
