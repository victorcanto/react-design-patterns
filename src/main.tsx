import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/error-boundaries/error-boundary.tsx";
import delay from "./components/async-router/delay.ts";
import Nav from "./components/async-router/nav.tsx";
import { loader } from "./components/async-router/main-loader.tsx";
import { booksRoute } from "./components/async-router/books.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Club = lazy(() =>
  delay(import("./components/async-router/club.tsx"), 1000)
);
const Main = lazy(() =>
  delay(import("./components/async-router/main.tsx"), 1000)
);

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      { index: true, loader: loader, element: <Main /> },
      { path: "/books", ...booksRoute },
      { path: "/club", element: <Club /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error at App Level</h1>}>
      <RouterProvider router={router}></RouterProvider>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
