import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const AuthTwo = () => {
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
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {},
      ],
    },
  ]);
  return <RouterProvider router={pathRouter} />;
};

export default AuthTwo;
