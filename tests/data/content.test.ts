import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contact, currentSkills, devBooks, devLinks, education, extendedSkills, work } from "@/data/content";

describe("resume content", () => {
  it("contains complete contact and resume collections", () => {
    expect(contact).toMatchObject({ role: expect.any(String), phone: expect.any(String), email: expect.stringContaining("@") });
    expect(currentSkills.length).toBeGreaterThanOrEqual(5);
    expect(extendedSkills.length).toBeGreaterThanOrEqual(15);
    expect(work.length).toBeGreaterThanOrEqual(4);
    expect(education.length).toBeGreaterThanOrEqual(3);
    expect(devBooks.length).toBeGreaterThanOrEqual(7);
    expect(devLinks.length).toBeGreaterThanOrEqual(10);
    expect(work.every((job) => job.bullets.length > 0)).toBe(true);
  });

  it("references valid URLs and existing developer images", () => {
    const developerImage = (file: string) => join(process.cwd(), "public", "img", "developer", file);

    for (const [image, title] of devBooks) {
      expect(title.trim()).not.toBe("");
      expect(existsSync(developerImage(image)), `Missing book image: ${image}`).toBe(true);
    }
    for (const [image, title, href] of devLinks) {
      expect(title.trim()).not.toBe("");
      expect(() => new URL(href)).not.toThrow();
      expect(existsSync(developerImage(image)), `Missing link image: ${image}`).toBe(true);
    }
    for (const skill of currentSkills) expect(() => new URL(skill.href)).not.toThrow();
    for (const [, href] of extendedSkills) expect(() => new URL(href)).not.toThrow();
  });
});
