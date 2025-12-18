import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Checkout from "./Pages/Checkout";

const ECommerceOne = () => {
  const pathRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={pathRouter} />
    </>
  );
};

export default ECommerceOne;
