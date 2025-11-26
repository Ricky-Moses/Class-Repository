import React from "react";
import EAppTwo from "./Project/E-Commerce-2/EAppTwo";
// import EApp from "./Project/E-Commerce/EApp";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form from "./ClassTwo/Form";
// import Register from "./ClassTwo/Auth/Register";
// import List from "./ClassTwo/Auth/List";
// import FetchUser from "./ClassTwo/Controllers/FetchUser";

const App = () => {
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
  //       {
  //         path: "edit/:id",
  //         element: <Register />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <FetchUser>
        <RouterProvider router={router} />
      </FetchUser> */}

      {/* <EApp /> */}

      <EAppTwo />
    </>
  );
};

export default App;
