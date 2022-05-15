import { createGlobalStyle } from 'styled-components'
import { colors } from './colors_styles'
import { typography } from './fonts_styles'
export const GlobalStyle = createGlobalStyle`
  /* Colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}

  /* General styles */
  :root {
    --navbar-max-width: 71.25rem;
    --content-max-width: 71.25rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans Display' system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.body.background};
    color: ${({ theme }) => theme.colors.body.text};
    scroll-behavior: smooth;
  }

  a {
    color: ${({ theme }) => theme.colors.body.text};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;
    font-weight: var(--medium);
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
    font-family: 'Noto Sans Display', system-ui, sans-serif;
  }
  h1 {
    font-size: var(--h1);
  }
  h2 {
    font-size: var(--h2);
  }
  h3 {
    font-size: var(--h3);
  }

  p{
    font-size: var(--p);
  }

  textarea,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Noto Sans Display', system-ui, sans-serif;
  }
  button {
    cursor: pointer;
  }
`
