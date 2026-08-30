import { describe, expect, it } from "vitest";
import themes from "../components/styles/themes";

describe("Catppuccin theme", () => {
  it("provides distinct semantic accents for richer terminal output", () => {
    const accents = themes.catppuccin.colors.accents;

    expect(accents).toBeDefined();
    expect(accents).toEqual({
      heading: "#B4BEFE",
      command: "#89B4FA",
      link: "#89DCEB",
      section: "#A6E3A1",
      project: "#F5C2E7",
      hint: "#94E2D5",
      warning: "#F9E2AF",
      error: "#F38BA8",
    });

    const colors = Object.values(accents ?? {});
    expect(colors).toHaveLength(8);
    expect(new Set(colors).size).toBe(8);
    colors.forEach(color => expect(color).toMatch(/^#[0-9A-F]{6}$/));
  });
});
