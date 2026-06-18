import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ThemeProvider, usePortal } from "@/components/theme-provider";

function PreferencesHarness() {
  const { preferences, toggleFavorite, toggleTheme } = usePortal();
  return (
    <div>
      <span>{preferences.theme}</span>
      <span>{preferences.favoriteArt.join(",") || "none"}</span>
      <button onClick={toggleTheme} type="button">Toggle theme</button>
      <button onClick={() => toggleFavorite("Iris")} type="button">Toggle Iris</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  it("hydrates preferences and persists theme and favorite changes", async () => {
    window.localStorage.setItem("jm-resume-portal", JSON.stringify({
      version: 1,
      theme: "light",
      favoriteArt: ["Iris"]
    }));

    render(<ThemeProvider><PreferencesHarness /></ThemeProvider>);
    await screen.findByText("light");
    expect(screen.getByText("Iris")).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("data-theme", "light");

    fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));
    fireEvent.click(screen.getByRole("button", { name: "Toggle Iris" }));

    await waitFor(() => {
      expect(screen.getByText("dark")).toBeInTheDocument();
      expect(screen.getByText("none")).toBeInTheDocument();
    });
    expect(JSON.parse(window.localStorage.getItem("jm-resume-portal") ?? "{}")).toEqual({
      version: 1,
      theme: "dark",
      favoriteArt: []
    });
  });

  it("adds a favorite that is not already selected", () => {
    render(<ThemeProvider><PreferencesHarness /></ThemeProvider>);
    fireEvent.click(screen.getByRole("button", { name: "Toggle Iris" }));
    expect(screen.getByText("Iris")).toBeInTheDocument();
  });

  it("rejects context access outside the provider", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() => render(<PreferencesHarness />)).toThrow("usePortal must be used inside ThemeProvider");
    consoleError.mockRestore();
  });
});
