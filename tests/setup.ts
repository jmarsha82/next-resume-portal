import "@testing-library/jest-dom/vitest";
import React from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({ fill: _fill, priority: _priority, ...props }: Record<string, unknown>) =>
    React.createElement("img", props)
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(() => "/")
}));

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  vi.unstubAllEnvs();
});
