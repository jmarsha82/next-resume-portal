export const STORAGE_VERSION = 1;

export type StoredPreferences = {
  version: number;
  theme: "dark" | "light";
  favoriteArt: string[];
  tetrisHighScore: number;
  snakeHighScore: number;
};

export const defaultPreferences: StoredPreferences = {
  version: STORAGE_VERSION,
  theme: "dark",
  favoriteArt: [],
  tetrisHighScore: 0,
  snakeHighScore: 0
};

const KEY = "jm-resume-portal";

export function readPreferences(storage?: Pick<Storage, "getItem">): StoredPreferences {
  if (!storage) return defaultPreferences;
  try {
    const value = storage.getItem(KEY);
    if (!value) return defaultPreferences;
    const parsed = JSON.parse(value) as Partial<StoredPreferences>;
    if (parsed.version !== STORAGE_VERSION) return defaultPreferences;
    return { ...defaultPreferences, ...parsed };
  } catch {
    return defaultPreferences;
  }
}

export function writePreferences(
  preferences: StoredPreferences,
  storage?: Pick<Storage, "setItem">
) {
  storage?.setItem(KEY, JSON.stringify(preferences));
}
