import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
//import "./index.css";
import App from "./App";
import { theme } from "./syles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
