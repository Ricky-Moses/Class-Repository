import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./Pages/Home";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";

const AuthOne = () => {
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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={pathRouter} />
    </>
  );
};

export default AuthOne;
