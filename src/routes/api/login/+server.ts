import type { RequestHandler } from './$types';
import { JWT_KEY, USER_LOGIN, USER_PASSWORD } from '$env/static/private';
import jsonwebtoken from 'jsonwebtoken';
const { sign } = jsonwebtoken;

export const POST: RequestHandler = async ({ request }) => {
	request.headers.set('Content-Type', 'application/json');
	const user = await request.json();
	const username: string = user.username;
	const password: string = user.password;
	let statusMsg: string;

	if (username !== USER_LOGIN) {
		statusMsg = 'Incorrect username';
	}
	if (password !== USER_PASSWORD) {
		statusMsg = 'Incorrect password';
	}
	if (username !== USER_LOGIN && password !== USER_PASSWORD) {
		statusMsg = 'Wrong username and password';
	}

	if (statusMsg) {
		console.log('|api/login| => ' + statusMsg);
		return new Response(JSON.stringify({ message: statusMsg }), {
			status: 401,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const expireInSeconds = 4 * 60 * 60;
	const jwt: string = sign({ username: username }, JWT_KEY, { expiresIn: expireInSeconds });
	statusMsg = 'Login successful';

	console.log('|api/login| => ' + statusMsg);
	return new Response(
		JSON.stringify({
			message: 'Login successful',
			jwt,
			expiresIn: expireInSeconds
		}), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
};
