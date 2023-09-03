import router from '@/router/index.js';
import { RouteParamsRaw } from 'vue-router';
import { ServiceToView } from '@/types/generalTypes.js';

export function redirect(path: string, args: RouteParamsRaw = {}) {
	router.push({ name: path, params: args });
}

export function serviceToView(event: string, data: object = {}): ServiceToView {
	return { event: event, data: data };
}
