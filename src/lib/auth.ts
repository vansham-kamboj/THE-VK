import { Lucia } from "lucia";
import { NotionAdapter } from "./notion-adapter";
import { notion } from "./notion";
import { cache } from "react";
import { cookies } from "next/headers";
import type { Session, User } from "lucia";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

if (!process.env.NOTION_USERS_DATABASE_ID) {
    throw new Error('Missing NOTION_USERS_DATABASE_ID environment variable');
}

const adapter = new NotionAdapter(notion, process.env.NOTION_USERS_DATABASE_ID);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: process.env.NODE_ENV === "production"
		}
	},
    getUserAttributes: (attributes) => {
        return {
            name: attributes.name,
            username: attributes.username,
            avatarUrl: attributes.avatarUrl,
        }
    }
});

export const validateRequest = cache(async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
	const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
	if (!sessionId) {
		return {
			user: null,
			session: null
		};
	}

	const result = await lucia.validateSession(sessionId);
	// next.js throws when you attempt to set cookie when rendering page
	try {
		if (result.session && result.session.fresh) {
			const sessionCookie = lucia.createSessionCookie(result.session.id);
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
		if (!result.session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
		}
	} catch {}
	return result;
});


declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

export interface DatabaseUserAttributes {
    name: string;
    username: string;
    avatarUrl?: string;
}
