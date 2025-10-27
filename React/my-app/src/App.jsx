import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import ClassComponent from "./Class Component/ClassComponent";
import FuncComponent from "./Functional Component/FuncComponent";
import GrandParent from "./Prop drilling/ClassOne/GrandParent";
import GrandChild from "./Prop drilling/ClassOne/GrandChild";
import ClassComponentOne from "./Class Component/ClassComponentOne";
import FuncComponentOne from "./Functional Component/FuncComponentOne";
import GrandParentTwo from "./Prop drilling/ClassTwo/GrandParentTwo";

const App = () => {
  const headerTitle = "React Class";
  const menuList = ["Home", "About", "Skill", "Project", "Contact"];
  const propDrill = "This is Prop drilling child!";
  return (
    <>
      {/* <main>
        <Header title={headerTitle} menuList={menuList} />
        <Home />
        <Footer />
      </main> */}

      {/* <ClassComponent /> */}
      {/* <FuncComponent /> */}

      {/* <GrandParent drills={propDrill} /> */}

      {/* <ClassComponentOne /> */}
      {/* <FuncComponentOne /> */}


      <GrandParentTwo drill={propDrill} />
    </>
  );
};

export default App;
