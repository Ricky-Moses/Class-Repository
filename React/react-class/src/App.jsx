// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form from "./ClassTwo/Form";
// import Register from "./ClassTwo/Auth/Register";
// import List from "./ClassTwo/Auth/List";
// import FetchUser from "./ClassTwo/Controllers/FetchUser";
import FormOne from "./Class/FormOne/FormOne";
import HomeForm from "./Class/FormOne/HomeForm";
import FormList from "./Class/FormOne/FormList";
import User from "./Class/Fetch/User";
// import IntroOne from "./Intro/IntroOne";

import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeForm />,
      children: [
        {
          index: true,
          element: <FormOne />,
        },
        {
          path: "list",
          element: <FormList />,
        },
        {
          path: "edit/:id",
          element: <FormOne />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Form />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Register />,
  //       },
  //       {
  //         path: "list",
  //         element: <List />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
        }}
      />
      <User>
        <RouterProvider router={router} />
      </User>

      {/* <FetchUser>
        <RouterProvider router={router} />
      </FetchUser> */}

      {/* <IntroOne /> */}
    </>
  );
};

export default App;
