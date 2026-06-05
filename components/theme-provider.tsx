"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultPreferences, readPreferences, writePreferences } from "@/lib/storage";

type PortalContextValue = {
  preferences: typeof defaultPreferences;
  toggleTheme: () => void;
  toggleFavorite: (name: string) => void;
  setHighScore: (game: "tetrisHighScore" | "snakeHighScore", score: number) => void;
};

const PortalContext = createContext<PortalContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    setPreferences(readPreferences(window.localStorage));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = preferences.theme;
    writePreferences(preferences, window.localStorage);
  }, [preferences]);

  const value = useMemo<PortalContextValue>(() => ({
    preferences,
    toggleTheme: () => setPreferences((current) => ({
      ...current,
      theme: current.theme === "dark" ? "light" : "dark"
    })),
    toggleFavorite: (name) => setPreferences((current) => ({
      ...current,
      favoriteArt: current.favoriteArt.includes(name)
        ? current.favoriteArt.filter((item) => item !== name)
        : [...current.favoriteArt, name]
    })),
    setHighScore: (game, score) => setPreferences((current) => ({
      ...current,
      [game]: Math.max(current[game], score)
    }))
  }), [preferences]);

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export function usePortal() {
  const value = useContext(PortalContext);
  if (!value) throw new Error("usePortal must be used inside ThemeProvider");
  return value;
}
