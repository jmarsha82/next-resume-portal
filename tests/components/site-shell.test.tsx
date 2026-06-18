import { fireEvent, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { describe, expect, it, vi } from "vitest";
import { SiteShell } from "@/components/site-shell";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

describe("SiteShell", () => {
  it("renders navigation and marks nested routes active", () => {
    vi.mocked(usePathname).mockReturnValue("/programmer/projects");
    renderWithPortal(<SiteShell><h1>Content</h1></SiteShell>);

    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Programmer" })).toHaveClass("active");
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveClass("active");
    expect(screen.getByRole("link", { name: "Justin Marshall home" })).toHaveAttribute("href", "/");
  });

  it("switches between dark and light theme controls", () => {
    vi.mocked(usePathname).mockReturnValue("/");
    renderWithPortal(<SiteShell><h1>Content</h1></SiteShell>);

    expect(screen.getByRole("link", { name: "Home" })).toHaveClass("active");
    fireEvent.click(screen.getByRole("button", { name: "Light mode" }));
    expect(screen.getByRole("button", { name: "Dark mode" })).toBeInTheDocument();
  });
});
