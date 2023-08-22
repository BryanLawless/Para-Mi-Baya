import { Server, Socket } from 'socket.io';

export default class BaseHandler {
	static test(io: Server, socket: Socket, data: any) {
		console.log('Recieved test event!');
	}
}
