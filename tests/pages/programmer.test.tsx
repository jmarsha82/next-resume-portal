import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProgrammerPage from "@/app/programmer/page";
import { contact, currentSkills, devBooks, devLinks, education, extendedSkills, work } from "@/data/content";
import { renderWithPortal } from "@/tests/helpers/render-with-portal";

describe("ProgrammerPage", () => {
  it("renders the complete resume and resource collections", () => {
    const { container } = renderWithPortal(<ProgrammerPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Engineering withclarity and care.");
    expect(screen.getByRole("link", { name: contact.email })).toHaveAttribute("href", `mailto:${contact.email}`);
    expect(container.querySelectorAll(".skill-row")).toHaveLength(currentSkills.length);
    expect(container.querySelectorAll(".education")).toHaveLength(education.length);
    expect(container.querySelectorAll(".experience > article")).toHaveLength(work.length);
    expect(container.querySelectorAll(".toolbox a")).toHaveLength(extendedSkills.length);
    expect(container.querySelectorAll(".book-grid .resource-card")).toHaveLength(devBooks.length);
    expect(container.querySelectorAll(".link-grid .resource-card")).toHaveLength(devLinks.length);
  });

  it("renders every book cover and external developer link", () => {
    const { container } = renderWithPortal(<ProgrammerPage />);

    for (const [image, title] of devBooks) {
      expect(screen.getByRole("img", { name: title })).toHaveAttribute("src", `/img/developer/${image}`);
    }
    const linkCards = Array.from(container.querySelectorAll<HTMLAnchorElement>(".link-grid .resource-card"));
    for (const [, title, href] of devLinks) {
      const link = linkCards.find((card) => card.querySelector("h3")?.textContent === title);
      expect(link).toHaveAttribute("href", href);
    }
  });
});
