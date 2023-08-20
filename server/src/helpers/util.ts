import { ServiceToController } from '../types/generalTypes.js';

export function serviceToController(
	event: string,
	data: any = {}
): ServiceToController {
	return { event: event, data };
}

export function randomNumberBetween(lower: number, upper: number): number {
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
