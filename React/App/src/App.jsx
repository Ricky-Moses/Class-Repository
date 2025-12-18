import React from "react";
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

      <GlobalProvider>
        <ECommerceOne />
      </GlobalProvider>
    </>
  );
};

export default App;
