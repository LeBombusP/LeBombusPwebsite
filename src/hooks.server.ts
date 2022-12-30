import { authenticateUser } from '$lib/server/auth';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.token = authenticateUser(event);

	if (event.url.pathname.startsWith('/login') && event.locals.token) {
		throw redirect(303, '/dashboard');
	}

	if (event.url.pathname.startsWith('/dashboard') && !event.locals.token) {
		throw redirect(303, '/login');
	}

	const response = await resolve(event);

	return response;
};
