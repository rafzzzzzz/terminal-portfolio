/// <reference types="vite/client" />

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    name: string;
    colors: {
      body: string;
      scrollHandle: string;
      scrollHandleHover: string;
      primary: string;
      secondary: string;
      accents: {
        heading: string;
        command: string;
        link: string;
        section: string;
        project: string;
        hint: string;
        warning: string;
        error: string;
      };
      text: {
        100: string;
        200: string;
        300: string;
      };
    };
  }
}
