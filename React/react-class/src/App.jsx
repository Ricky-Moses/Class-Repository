import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormOne from "./Class/FormOne/FormOne";
import HomeForm from "./Class/FormOne/HomeForm";
import FormList from "./Class/FormOne/FormList";
import User from "./Class/Fetch/User";

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
      ],
    },
  ]);
  return (
    <User>
      <RouterProvider router={router} />
    </User>
  );
};

export default App;
