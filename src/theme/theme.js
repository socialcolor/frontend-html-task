import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const theme = {
  colors: {
    dark: {
      colorSidebarBackgroundDefault: "#202127",
      colorSidebarBackgroundHover: "#2D2E34",
      colorSidebarBackgroundActive: "#393A3F",
      colorTextDefault: "#f0f2ff",
      colorTextHover: "#f0f2ff",
      colorTextActive: "#f0f2ff",
      colorTextLogoDefault: "#3B82F6",
      colorButtonBackgroundDefault: "#202127",
      colorButtonBackgroundActive: "#4B5966",
    },
    light: {
      colorSidebarBackgroundDefault: "#fff",
      colorSidebarBackgroundHover: "#f0f2ff",
      colorSidebarBackgroundActive: "#f0f2ff",
      colorTextDefault: "#97a5b9",
      colorTextLHover: "#091b31",
      colorTextLActive: "#0000b5",
      colorTextLogoDefault: "#0000b5",
      colorButtonBackgroundDefault: "#fff",
      colorButtonBackgroundActive: "#e2e8f0",
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors[theme.currentTheme].colorSidebarBackgroundActive};
    color: ${({ theme }) => theme.colors[theme.currentTheme].colorTextDefault};
    transition: all 350ms ease-out;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;
