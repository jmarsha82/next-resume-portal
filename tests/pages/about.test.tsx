import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "@/app/about/page";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

describe("AboutPage", () => {
  it("presents the developer and artist biography", () => {
    renderWithPortal(<AboutPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Software engineer.Working artist.");
    expect(screen.getByText(/senior programmer analyst at Boeing/i)).toBeInTheDocument();
    expect(screen.getByText(/sold more than 100 works/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Justin Marshall" })).toHaveAttribute("src", "/img/profile_picture.jpg");
  });
});
