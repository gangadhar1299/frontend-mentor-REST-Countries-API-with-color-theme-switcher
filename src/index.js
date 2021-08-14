import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
import { globalStyles } from "./styles/globalStyles";
import { Global } from "@emotion/react";
import { ThemeProvider } from "./contexts/theme-context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Global styles={globalStyles} />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
