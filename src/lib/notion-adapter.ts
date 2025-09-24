import type { Adapter, DatabaseSession, DatabaseUser } from "lucia";
import type { Client } from "@notionhq/client";
import type { PageObjectResponse, PartialPageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { DatabaseUserAttributes } from "./auth";


export class NotionAdapter implements Adapter {
    private client: Client;
    private usersDbId: string;
    private sessionsDbId: string; // Assuming you create a separate DB for sessions

    constructor(client: Client, usersDbId: string) {
        this.client = client;
        this.usersDbId = usersDbId;
        // In a real app, you MUST create a separate Notion database for sessions
        // and provide its ID here. For this example, we'll simulate it.
        this.sessionsDbId = "sessions_db_id_placeholder"; 
    }

    public async deleteSession(sessionId: string): Promise<void> {
        // In a real implementation, you would query the sessions DB
        // and delete the page corresponding to the sessionId.
        // This is a simplified placeholder.
        console.log(`Pretending to delete session: ${sessionId}`);
        return Promise.resolve();
    }

    public async deleteUserSessions(userId: string): Promise<void> {
        console.log(`Pretending to delete all sessions for user: ${userId}`);
        return Promise.resolve();
    }
    
    public async getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
        // This is a heavily simplified mock because Notion is not ideal for session storage
        // due to its query and update limitations.
        // A real-world app should use a proper database like Redis or Postgres for sessions.

        // 1. Find the session (placeholder)
        // In a real scenario, you'd query your 'Sessions' database.
        // We'll assume the sessionId contains the userId and an expiry for this example.
        try {
            const [userId, expiresStr] = sessionId.split(':');
            const expiresAt = new Date(Number(expiresStr));

            if (!userId || !expiresAt || isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
                return [null, null];
            }
             const session: DatabaseSession = {
                id: sessionId,
                userId: userId,
                expiresAt: expiresAt,
                attributes: {},
            };

            // 2. Get the user
            const userPage = await this.client.pages.retrieve({ page_id: userId });
            if (!userPage) {
                return [session, null];
            }

            const user = this.pageToDatabaseUser(userPage as PageObjectResponse);
            if (!user) {
                return [session, null];
            }
            return [session, user];

        } catch (error) {
            console.error("Error in getSessionAndUser:", error);
            return [null, null];
        }
    }


    public async getUserSessions(userId: string): Promise<DatabaseSession[]> {
        // Mock implementation
        return Promise.resolve([]);
    }

    public async setSession(session: DatabaseSession): Promise<void> {
        // Mock implementation: In a real app, you'd create/update a page in your 'Sessions' DB.
        // The session ID we generate will be a simple concatenation for demonstration.
        const mockSessionId = `${session.userId}:${session.expiresAt.getTime()}`;
        session.id = mockSessionId; // Lucia expects the adapter to set the ID.
        console.log(`Pretending to set session: ${session.id}`);
        return Promise.resolve();
    }

    public async updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void> {
        // Mock implementation
        console.log(`Pretending to update session expiration for: ${sessionId}`);
        return Promise.resolve();
    }

    public async deleteExpiredSessions(): Promise<void> {
        // Mock implementation
        console.log("Pretending to delete expired sessions.");
        return Promise.resolve();
    }

    private pageToDatabaseUser(page: PageObjectResponse): DatabaseUser | null {
        try {
            const properties = page.properties;
            const nameProp = properties['name'] as any;
            const usernameProp = properties['username'] as any;
            const avatarProp = properties['avatarUrl'] as any;

            const attributes: DatabaseUserAttributes = {
                name: nameProp?.title[0]?.plain_text ?? 'Unnamed User',
                username: usernameProp?.rich_text[0]?.plain_text ?? 'nousername',
                avatarUrl: avatarProp?.url ?? undefined
            };

            if (!attributes.username) return null;

            return {
                id: page.id,
                attributes: attributes
            };
        } catch (e) {
            console.error("Failed to convert page to DatabaseUser:", e)
            return null;
        }
    }
}
