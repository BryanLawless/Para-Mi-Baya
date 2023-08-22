import cors from 'cors';
import { createServer } from 'http';
import httpStatus from 'http-status';
import router from './router/index.js';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';
import database from './database/database.js';
import registerSocketServer from './gateway/main.js';
import express, { Express, Request, Response, NextFunction } from 'express';
import {
	clientUrl,
	cloudinaryCloudName,
	cloudinaryApiKey,
	cloudinaryApiKeySecret
} from './config/config.js';

const app: Express = express();
const server = createServer(app);

app.disable('x-powered-by');

app.use(
	cors({
		credentials: true,
		origin: clientUrl,
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS', 'DELETE']
	})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
	cloud_name: cloudinaryCloudName,
	api_key: cloudinaryApiKey,
	api_secret: cloudinaryApiKeySecret
});

database.connect();

app.use('/api', router);
app.use((req: Request, res: Response, next: NextFunction) =>
	res.sendStatus(httpStatus.NOT_FOUND)
);

registerSocketServer(server);

server.listen(Number(process.env.PORT) || 5000, (): void => {
	console.log('🍓 - Para Mi Baya server started');
});
