import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components";
import Home from "../pages/home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
