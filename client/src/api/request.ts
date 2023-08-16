import instance from './instance.js';

export default async function request(
	uri: string,
	method: string,
	data: object = {}
): Promise<{ status: number; response: any } | { status: any; response: any }> {
	let requestPromise = await instance
		.request({
			method: method,
			url: uri,
			data: data
		})
		.then((response) => {
			return { status: response.status, response: response.data };
		})
		.catch((error) => {
			return { status: error.response.status, response: error.response.data };
		});

	return requestPromise;
}
