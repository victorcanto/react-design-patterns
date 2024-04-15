import { lazy } from "react";
import delay from "./delay.ts";
import Nav from "./nav.tsx";
import { loader } from "./main-loader.tsx";
import { booksRoute } from "./books.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Club = lazy(() => delay(import("./club.tsx"), 1000));
const Main = lazy(() => delay(import("./main.tsx"), 1000));

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

const Demo = () => {
  return <RouterProvider router={router} />;
};

export default Demo;
