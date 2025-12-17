import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Private from "./Authentication/Private";
import Profile from "./Pages/Profile";

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
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: (
            <Private>
              <Profile />
            </Private>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={pathRouter} />;
};

export default AuthOne;
