import { Server } from 'socket.io';
import routes from './router/index.js';
import { Server as httpServer } from 'http';
import { clientUrl } from '../config/config.js';
import { authSocket } from './middlewares/authMiddleware.js';
import { SocketExtended } from '../types/extendTypes.js';

export default function createWebsocketServer(server: httpServer) {
	const io = new Server(server, {
		cors: {
			origin: clientUrl,
			methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS']
		},
		allowEIO3: true,
		transports: ['polling', 'websocket']
	});

	console.log('🔌 - Websocket server started');

	io.use(authSocket);

	io.on('connection', (socket) => {
		// skipcq: JS-D008
		routes.map((route) => {
			socket.on(route.name, (data) => {
				route.controller(io, socket as SocketExtended, data);
			});
		});
	});
}
