import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ArtGallery, type ArtItem } from "@/components/art-gallery";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

const artwork: ArtItem[] = [
  ["iris.jpg", "Iris", "Portrait"],
  ["horizon.png", "Horizon", "Landscape"]
];

describe("ArtGallery", () => {
  it("renders artwork, opens a detail dialog, and closes it", () => {
    const { container } = renderWithPortal(<ArtGallery items={artwork} />);

    expect(screen.getByText("Portrait")).toBeInTheDocument();
    expect(container.querySelectorAll(".gallery article")).toHaveLength(2);
    expect(container.querySelector(".gallery article")).toHaveClass("wide");

    fireEvent.click(screen.getByRole("img", { name: "Iris" }));
    expect(screen.getByRole("dialog", { name: "Iris" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close artwork" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("adds and removes favorite artwork", () => {
    renderWithPortal(<ArtGallery items={artwork} />);

    fireEvent.click(screen.getByRole("button", { name: "Add Iris to favorites" }));
    expect(screen.getByRole("button", { name: "Remove Iris from favorites" })).toHaveClass("active");
    fireEvent.click(screen.getByRole("button", { name: "Remove Iris from favorites" }));
    expect(screen.getByRole("button", { name: "Add Iris to favorites" })).not.toHaveClass("active");
  });
});
