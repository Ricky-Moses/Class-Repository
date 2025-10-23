import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
const App = () => {
  const title = "React Class"
  return (
    <>
      <main>
        {/* Header */}
        <Header headTitle={title} />
        {/* Home */}
        <Home />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default App;
