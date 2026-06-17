import { describe, expect, it, vi } from "vitest";
import { defaultPreferences, readPreferences, writePreferences } from "./storage";

describe("preference storage", () => {
  it("uses defaults when storage is unavailable, empty, invalid, or outdated", () => {
    expect(readPreferences()).toEqual(defaultPreferences);
    expect(readPreferences({ getItem: () => null })).toEqual(defaultPreferences);
    expect(readPreferences({ getItem: () => "bad json" })).toEqual(defaultPreferences);
    expect(readPreferences({ getItem: () => JSON.stringify({ version: 0, theme: "light" }) })).toEqual(defaultPreferences);
  });

  it("merges valid versioned values and writes them", () => {
    const preferences = readPreferences({ getItem: () => JSON.stringify({ version: 1, theme: "light", favoriteArt: ["Iris"] }) });
    expect(preferences.theme).toBe("light");
    expect(preferences.favoriteArt).toEqual(["Iris"]);
    const setItem = vi.fn();
    writePreferences(preferences, { setItem });
    expect(setItem).toHaveBeenCalledWith("jm-resume-portal", JSON.stringify(preferences));
    expect(() => writePreferences(preferences)).not.toThrow();
  });
});
