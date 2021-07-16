import { createGlobalStyle } from "styled-components";
import { colors } from "./colors.styles";
import { typography } from "./fonts.styles";
import NotoSansSC from "../public/fonts/NotoSansSC-Regular.otf";

export const GlobalStyle = createGlobalStyle`
  /* Colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}
  /*font-facer*/
 @font-face{
     font-family: "NotoSans SC Regular";
     src: url(${NotoSansSC});
 }

  /* General styles */
  :root {
    --navbar-max-width: 71.25rem;
    --content-max-width: 71.25rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'NotoSans SC Regular', system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
  }

  a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'NotoSans SC Regular', system-ui, sans-serif;
  }
  h1 {
    font-size: var(--h1);
    font-weight: var(--bold);
  }
  h2 {
    font-size: var(--h2);
    font-weight: var(--bold);
  }
  h3 {
    font-size: var(--h3);
    font-weight: var(--semi);
  }

  textarea,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'NotoSans SC Regular', system-ui, sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
