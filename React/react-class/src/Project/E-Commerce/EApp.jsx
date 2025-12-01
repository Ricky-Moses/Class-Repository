import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import GlobalProvider from "./Controllers/GlobalProvider";
import { Toaster } from "react-hot-toast";
const EApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
        position="right top"
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

export default EApp;
