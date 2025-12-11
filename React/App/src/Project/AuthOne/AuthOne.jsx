import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Register from "./Authentication/Register";

const AuthOne = () => {
  const pathRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={pathRouter} />;
};

export default AuthOne;
