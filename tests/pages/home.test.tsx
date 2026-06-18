import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage from "@/app/page";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

describe("HomePage", () => {
  it("presents both portfolio paths and the default profile selection link", () => {
    renderWithPortal(<HomePage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Developer.Artist. Builder.");
    expect(screen.getByRole("img", { name: "Justin Marshall" })).toHaveAttribute("src", "/img/profile_picture.jpg");
    expect(screen.getByRole("link", { name: "Profile Selection" })).toHaveAttribute("href", "http://127.0.0.1:4100");
    expect(screen.getAllByRole("link", { name: /Programmer/ })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: /Artist/ })).toHaveLength(2);
  });

  it("uses the configured master profile URL", () => {
    vi.stubEnv("NEXT_PUBLIC_MASTER_PROFILE_URL", "https://profiles.example.test");
    renderWithPortal(<HomePage />);

    expect(screen.getByRole("link", { name: "Profile Selection" })).toHaveAttribute("href", "https://profiles.example.test");
  });
});
