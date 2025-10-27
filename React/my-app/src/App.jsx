import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import ClassComponent from "./Class Component/ClassComponent";
import FuncComponent from "./Functional Component/FuncComponent";

const App = () => {
  return (
    <>
      {/* <main>
        <Header />
        <Home />
        <Footer />
      </main> */}

      <ClassComponent />
      <FuncComponent />
    </>
  );
};

export default App;
