import React, { useState } from "react";
import EApp from "./Project/E-Commerce/EApp";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form from "./ClassTwo/Form";
// import Register from "./ClassTwo/Auth/Register";
// import List from "./ClassTwo/Auth/List";
// import FetchUser from "./ClassTwo/Controllers/FetchUser";
// import FormOne from "./Class/FormOne/FormOne";
// import HomeForm from "./Class/FormOne/HomeForm";
// import FormList from "./Class/FormOne/FormList";
// import User from "./Class/Fetch/User";
// import IntroOne from "./Intro/IntroOne";

// import { Toaster } from "react-hot-toast";
// import ClassComponent from "./IntroClass/ClassComponent";
// import FunctionalComponent from "./IntroClass/FunctionalComponent";
// import HomeFormThree from "./ClassThree/HomeFormThree";
// import RegisterThree from "./ClassThree/Form/RegisterThree";
// import Fetch from "./ClassThree/Controllers/Fetch";
// import ListThree from "./ClassThree/Form/ListThree";

const App = () => {
  // const name = "Ricky";
  // const [count, setCount] = useState(0);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomeForm />,
  //     children: [
  //       {
  //         index: true,
  //         element: <FormOne />,
  //       },
  //       {
  //         path: "list",
  //         element: <FormList />,
  //       },
  //       {
  //         path: "edit/:id",
  //         element: <FormOne />,
  //       },
  //     ],
  //   },
  // ]);

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

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HomeFormThree />,
  //     children: [
  //       {
  //         index: true,
  //         element: <RegisterThree />,
  //       },
  //       {
  //         path: "/list",
  //         element: <ListThree />,
  //       },
  //       {
  //         path: "/edit/:id",
  //         element: <RegisterThree />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <Toaster
        position="top-right"
        toastOptions={{
          duration: 1000,
        }}
      />
      <User>
        <RouterProvider router={router} />
      </User> */}

      {/* <FetchUser>
        <RouterProvider router={router} />
      </FetchUser> */}

      {/* <IntroOne /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionalComponent user={name} count={count} setCount={setCount} /> */}

      {/* <Fetch>
        <RouterProvider router={router} />
      </Fetch> */}

      <EApp />
    </>
  );
};

export default App;
