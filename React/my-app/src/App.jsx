import React from "react";
// import Header from "./Component/Header";
// import Home from "./Component/Home";
// import Footer from "./Component/Footer";
// import ClassComponent from "./Class Component/ClassComponent";
// import FuncComponent from "./Functional Component/FuncComponent";
// import GrandParent from "./Prop drilling/ClassOne/GrandParent";
// import GrandChild from "./Prop drilling/ClassOne/GrandChild";
// import ClassComponentOne from "./Class Component/ClassComponentOne";
// import FuncComponentOne from "./Functional Component/FuncComponentOne";
// import GrandParentTwo from "./Prop drilling/ClassTwo/GrandParentTwo";
// import ConditionalRenderingOne from "./Conditional Rendering/ConditionalRenderingOne";
import ConditionalRenderingTwo from "./Conditional Rendering/ConditionalRenderingTwo";
import Business from "./Project/Business/Business";
import BusinessTwo from "./Project/BusinessTwo/BusinessTwo";
import BusinessThree from "./Project/BusinessThree/BusinessThree";
import { ControlledRender, UnControlledRender } from "./Render/ControlAndUnControl";
import HeaderOne from "./Component/HeaderOne";

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

      {/* <GrandParentTwo drill={propDrill} /> */}
      {/* <ConditionalRenderingOne /> */}
      {/* <ConditionalRenderingTwo /> */}
      {/* <Business /> */}

      {/* <BusinessTwo /> */}

      {/* <BusinessThree /> */}

      {/* <ControlledRender /> */}
      {/* <UnControlledRender /> */}
      <HeaderOne />

    </>
  );
};

export default App;
