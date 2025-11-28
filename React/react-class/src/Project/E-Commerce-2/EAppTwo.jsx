import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import GlobalProvider from "./Global/GlobalProvider";
import { Toaster } from "react-hot-toast";

const EAppTwo = () => {
  const router = createBrowserRouter([
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
      ],
    },
  ]);
  return (
    <>
      <Toaster
        position="top right"
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  );
};

export default EAppTwo;
