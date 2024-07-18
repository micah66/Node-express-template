import prisma from './prisma';
import { getSessionFromStorage } from './session';

export async function getLoggedInUser(req, res) {
	const session = await prisma.session.findUnique({
		where: {
			id: (await getSessionFromStorage(req, res)).id,
		},
	});

	return session?.userId;
}
