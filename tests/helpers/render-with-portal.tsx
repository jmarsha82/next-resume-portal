import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";

export function renderWithPortal(ui: ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}
