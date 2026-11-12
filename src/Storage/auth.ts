import type { AuthSession } from "../types/auth";

const sessionKey = "nova-auth";

export function clearAuthSession() {
  try {
    sessionStorage.removeItem(sessionKey);
  } catch {
    return;
  }
}

export function readAuthSession(): AuthSession | null {
  try {
    const saved = sessionStorage.getItem(sessionKey);
    if (!saved) return null;

    const session = JSON.parse(saved);
    if (
      typeof session?.token !== "string" ||
      !session.token.trim() ||
      typeof session.username !== "string" ||
      !session.username.trim()
    ) {
      clearAuthSession();
      return null;
    }

    return { token: session.token, username: session.username };
  } catch {
    clearAuthSession();
    return null;
  }
}

export function saveAuthSession(session: AuthSession) {
  try {
    sessionStorage.setItem(sessionKey, JSON.stringify(session));
  } catch {
    return;
  }
}
