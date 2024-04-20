import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./error-boundary.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
