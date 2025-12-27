import React from "react";
import { Toaster } from "react-hot-toast";
import FormOne from "./Project/FormOne/FormOne";
import AuthOne from "./Project/AuthOne/AuthOne";
import { Provider } from "react-redux";
// import store from "./Project/AuthOne/Redux/store";
// import GlobalProvider from "./Project/FormOne/Global/GlobalProvider";
import RouterOne from "./Project/RouterOne/RouterOne";
// import { BrowserRouter } from "react-router-dom";
import RouterTwo from "./Project/RouterTwo/RouterTwo";
import ECommerceOne from "./Project/E-Com-One/ECommerceOne";
import GlobalProvider from "./Project/E-Com-One/Global/GlobalProvider";
import Reducer from "./Class/Reducer";
import Ref from "./Class/Ref";

const App = () => {
  return (
    <>
      {/* <GlobalProvider>
        <FormOne />
      </GlobalProvider> */}
      {/* <Provider store={store}>
        <AuthOne />
      </Provider> */}
      {/* <BrowserRouter>
        <RouterOne />
      </BrowserRouter> */}

      {/* <RouterTwo /> */}

      <Toaster
        position="top right"
        toastOptions={{
          duration: 3000,
        }}
      />
      {/* <GlobalProvider>
        <ECommerceOne />
      </GlobalProvider> */}

      {/* <Reducer /> */}
      <Ref />
    </>
  );
};

export default App;
