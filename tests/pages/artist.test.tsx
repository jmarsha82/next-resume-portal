import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ArtistPage from "@/app/artist/page";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

describe("ArtistPage", () => {
  it("builds a gallery from all artwork files", () => {
    const { container } = renderWithPortal(<ArtistPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Portraits with apersonal frequency.");
    expect(container.querySelectorAll(".gallery article").length).toBeGreaterThan(50);
    expect(screen.getAllByText("Original artwork").length).toBe(container.querySelectorAll(".gallery article").length);
  });
});
