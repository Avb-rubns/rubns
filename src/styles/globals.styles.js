import { createGlobalStyle } from 'styled-components'
import { colors } from './colors.styles'
import { typography } from './fonts.styles'
import NotoSansSC from '../assets/fonts/NotoSansSC-Regular.otf'
import NotoSansSCBold from '../assets/fonts/NotoSansSC-Bold.otf'
export const GlobalStyle = createGlobalStyle`
  /* Colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}
  /*font-facer*/
 @font-face{
     font-family: "NotoSans SC Regular";
     src: url(${NotoSansSC});
     font-display: fallback;
 }
 @font-face{
     font-family: "NotoSans SC Bold";
     src: url(${NotoSansSCBold});
     font-display: fallback;
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
    font-family: 'NotoSans SC Regular','NotoSans SC Bold', system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
    scroll-behavior: smooth;
  }

  a {
    color: ${({ theme }) => theme.colors.body.text};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;
  }

  a:hover {
    color: var(--main-color);
  }
  input:focus{
    border: 2px solid var(--main-color);
  }
  * {
    box-sizing: border-box;
    margin: 0;
    font-family: 'NotoSans SC Regular', 'NotoSans SC Bold', system-ui, sans-serif;
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
`
