import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globals.styles";
import App from "./router/App";
import light from "./styles/schemes/light";

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </ThemeProvider>,
  document.getElementById("root")
);
