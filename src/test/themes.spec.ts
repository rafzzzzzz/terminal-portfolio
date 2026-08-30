import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import themes from "../components/styles/themes";
import { useTheme } from "../hooks/useTheme";

describe("portfolio themes", () => {
  beforeEach(() => window.localStorage.clear());

  it("offers the requested Omarchy theme set", () => {
    expect(Object.keys(themes)).toEqual([
      "catppuccin",
      "everforest",
      "osaka-jade",
      "gruvbox",
      "lumen",
      "tokyo-night",
      "nord",
      "ristretto",
    ]);
  });

  it("uses the official Catppuccin Mocha palette", () => {
    expect(themes.catppuccin.colors).toMatchObject({
      body: "#1E1E2E",
      scrollHandle: "#45475A",
      scrollHandleHover: "#585B70",
      primary: "#89B4FA",
      secondary: "#FAB387",
      text: {
        100: "#CDD6F4",
        200: "#BAC2DE",
        300: "#6C7086",
      },
    });

    const accents = themes.catppuccin.colors.accents;
    expect(accents).toEqual({
      heading: "#CBA6F7",
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
    colors.forEach(color => expect(color).toMatch(/^#[0-9A-F]{6}$/));
  });

  it("uses the installed Omarchy background and accent colors", () => {
    expect(
      Object.fromEntries(
        Object.entries(themes).map(([name, theme]) => [
          name,
          [theme.colors.body, theme.colors.primary],
        ])
      )
    ).toEqual({
      catppuccin: ["#1E1E2E", "#89B4FA"],
      everforest: ["#2D353B", "#7FBBB3"],
      "osaka-jade": ["#111C18", "#509475"],
      gruvbox: ["#282828", "#7DAEA3"],
      lumen: ["#16242D", "#8BC9EB"],
      "tokyo-night": ["#1A1B26", "#7AA2F7"],
      nord: ["#2E3440", "#81A1C1"],
      ristretto: ["#2C2525", "#F38D70"],
    });
  });

  it("uses Catppuccin when a removed theme remains in local storage", () => {
    window.localStorage.setItem("tsn-theme", "ubuntu");

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme.name).toBe("catppuccin");
    expect(result.current.themeLoaded).toBe(true);
  });
});
