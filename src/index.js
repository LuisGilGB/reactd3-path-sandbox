import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
