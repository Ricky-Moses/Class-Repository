import FormHome from "./Form/FormHome";
import FormOne from "./Form/FormOne";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListOne from "./Form/ListOne";
import UserOne from "./Fetch/UserOne";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormHome />,
      children: [
        {
          index: true,
          element: <FormOne />,
        },
        {
          path: "list",
          element: <ListOne />,
        },
      ],
    },
  ]);
  return (
    <>
      <UserOne>
        <RouterProvider router={router} />
      </UserOne>
    </>
  );
};

export default App;
