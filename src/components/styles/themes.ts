import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

// Palettes mirror Omarchy colors.toml files. Catppuccin uses official Mocha
// values and Omarchy's blue accent choice.
const theme: Themes = {
  catppuccin: {
    id: "T_001",
    name: "catppuccin",
    colors: {
      body: "#1E1E2E",
      scrollHandle: "#45475A",
      scrollHandleHover: "#585B70",
      primary: "#89B4FA",
      secondary: "#FAB387",
      accents: {
        heading: "#CBA6F7",
        command: "#89B4FA",
        link: "#89DCEB",
        section: "#A6E3A1",
        project: "#F5C2E7",
        hint: "#94E2D5",
        warning: "#F9E2AF",
        error: "#F38BA8",
      },
      text: {
        100: "#CDD6F4",
        200: "#BAC2DE",
        300: "#6C7086",
      },
    },
  },
  everforest: {
    id: "T_002",
    name: "everforest",
    colors: {
      body: "#2D353B",
      scrollHandle: "#3D484D",
      scrollHandleHover: "#475258",
      primary: "#7FBBB3",
      secondary: "#E09D7F",
      accents: {
        heading: "#D699B6",
        command: "#7FBBB3",
        link: "#83C092",
        section: "#A7C080",
        project: "#D699B6",
        hint: "#83C092",
        warning: "#DBBC7F",
        error: "#E67E80",
      },
      text: {
        100: "#D3C6AA",
        200: "#9DA9A0",
        300: "#4F585E",
      },
    },
  },
  "osaka-jade": {
    id: "T_003",
    name: "osaka-jade",
    colors: {
      body: "#111C18",
      scrollHandle: "#32473B",
      scrollHandleHover: "#53685B",
      primary: "#509475",
      secondary: "#A2734B",
      accents: {
        heading: "#E5C736",
        command: "#ACD4CF",
        link: "#2DD5B7",
        section: "#63B07A",
        project: "#D2689C",
        hint: "#8CD3CB",
        warning: "#E5C736",
        error: "#FF5345",
      },
      text: {
        100: "#C1C497",
        200: "#D6D5BC",
        300: "#81B8A8",
      },
    },
  },
  gruvbox: {
    id: "T_004",
    name: "gruvbox",
    colors: {
      body: "#282828",
      scrollHandle: "#504945",
      scrollHandleHover: "#665C54",
      primary: "#7DAEA3",
      secondary: "#E1875C",
      accents: {
        heading: "#D3869B",
        command: "#7DAEA3",
        link: "#89B482",
        section: "#A9B665",
        project: "#D3869B",
        hint: "#89B482",
        warning: "#D8A657",
        error: "#EA6962",
      },
      text: {
        100: "#D4BE98",
        200: "#BDAE93",
        300: "#7C6F64",
      },
    },
  },
  lumen: {
    id: "T_005",
    name: "lumen",
    colors: {
      body: "#16242D",
      scrollHandle: "#243D56",
      scrollHandleHover: "#304860",
      primary: "#8BC9EB",
      secondary: "#6FB8E3",
      accents: {
        heading: "#B1D8EE",
        command: "#6FB8E3",
        link: "#B4E4F6",
        section: "#86B7D8",
        project: "#8BC9EB",
        hint: "#D1EEF8",
        warning: "#9DCAE5",
        error: "#73A6CB",
      },
      text: {
        100: "#D6E2EE",
        200: "#D6E2EE",
        300: "#4D86B0",
      },
    },
  },
  "tokyo-night": {
    id: "T_006",
    name: "tokyo-night",
    colors: {
      body: "#1A1B26",
      scrollHandle: "#292E42",
      scrollHandleHover: "#414868",
      primary: "#7AA2F7",
      secondary: "#EB927B",
      accents: {
        heading: "#BB9AF7",
        command: "#7DA6FF",
        link: "#0DB9D7",
        section: "#B9F27C",
        project: "#AD8EE6",
        hint: "#449DAB",
        warning: "#E0AF68",
        error: "#F7768E",
      },
      text: {
        100: "#A9B1D6",
        200: "#B4BEE6",
        300: "#565F89",
      },
    },
  },
  nord: {
    id: "T_007",
    name: "nord",
    colors: {
      body: "#2E3440",
      scrollHandle: "#434C5E",
      scrollHandleHover: "#4C566A",
      primary: "#81A1C1",
      secondary: "#D5967A",
      accents: {
        heading: "#B48EAD",
        command: "#81A1C1",
        link: "#88C0D0",
        section: "#A3BE8C",
        project: "#B48EAD",
        hint: "#8FBCBB",
        warning: "#EBCB8B",
        error: "#BF616A",
      },
      text: {
        100: "#D8DEE9",
        200: "#ADB5C4",
        300: "#667080",
      },
    },
  },
  ristretto: {
    id: "T_008",
    name: "ristretto",
    colors: {
      body: "#2C2525",
      scrollHandle: "#403E41",
      scrollHandleHover: "#72696A",
      primary: "#F38D70",
      secondary: "#FB9A77",
      accents: {
        heading: "#BEBFFD",
        command: "#F8A788",
        link: "#85DACC",
        section: "#ADDA78",
        project: "#A8A9EB",
        hint: "#9BF1E1",
        warning: "#F9CC6C",
        error: "#FD6883",
      },
      text: {
        100: "#E6D9DB",
        200: "#C3B7B8",
        300: "#72696A",
      },
    },
  },
};

export default theme;
