import type { RequestEvent } from '@sveltejs/kit';
import { JWT_KEY } from '$env/static/private';
import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken;

export const authenticateUser = (event: RequestEvent) => {
	const userToken: string = event.cookies.get('token') ?? '';
	console.log('|lib/server/auth| => jwt = ' + userToken);
	if (!userToken) {
		return null;
	}

	const verified = verify(userToken, JWT_KEY, (err, decoded) => {
		if (err) {
			// console.log(err)
			return null;
		}
		return decoded;
	});

	console.log(verified);
	return verified;
};
