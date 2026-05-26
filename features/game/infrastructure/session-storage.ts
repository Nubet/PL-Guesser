import type { GameSession } from "@/features/game/domain/types";

const STORAGE_KEY = "plguesser.session.v1";
const SESSION_CHANGE_EVENT = "plguesser:session-change";
let lastRawSession: string | null | undefined;
let lastSnapshot: GameSession | null = null;

export function loadStoredSession(): GameSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as GameSession;
  } catch {
    return null;
  }
}

export function getStoredSessionSnapshotCached(): GameSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

  if (rawValue === lastRawSession) {
    return lastSnapshot;
  }

  lastRawSession = rawValue;

  if (!rawValue) {
    lastSnapshot = null;
    return null;
  }

  try {
    lastSnapshot = JSON.parse(rawValue) as GameSession;
    return lastSnapshot;
  } catch {
    lastSnapshot = null;
    return null;
  }
}

export function saveStoredSession(session: GameSession): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
}

export function clearStoredSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event(SESSION_CHANGE_EVENT));
}

export function subscribeToStoredSessionChanges(onChange: () => void): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onChange);
  window.addEventListener(SESSION_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(SESSION_CHANGE_EVENT, onChange);
  };
}
