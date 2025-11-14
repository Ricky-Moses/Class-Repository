import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchTwo from "./API/FetchTwo";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HeaderFive from "./SPA-5/HeaderFive";
// import Home from "./SPA-5/Pages/Home";
// import About from "./SPA-5/Pages/About";
// import Skill from "./SPA-5/Pages/Skill";
// import HeaderOne from "./SPA-2/HeaderOne";
// import Home from "./SPA-2/Pages/Home";
// import About from "./SPA-2/Pages/About";
// import Skill from "./SPA-2/Pages/Skill";
// import Project from "./SPA-2/Pages/Project";
// import Contact from "./SPA-2/Pages/Contact";
// import NotFound from "./SPA-2/Error/NotFound";
// import AboutOne from "./SPA-2/About/AboutOne";
// import ProductHeaderOne from "./SPA-3/ProductHeaderOne";
// import Gadgets from "./SPA-3/Pages/Gadgets";
// import Lights from "./SPA-3/Pages/Lights";
// import FetchApiOne from "./API/FetchApiOne";
// import FetchOne from "./API/FetchOne";
// import HeaderFour from "./SPA-4/HeaderFour";
// import Home from "./SPA-4/Pages/Home";
// import About from "./SPA-4/Pages/About";
// import Skill from "./SPA-4/Pages/Skill";
// import Project from "./SPA-4/Pages/Project";
// import Contact from "./SPA-4/Pages/Contact";
// import AboutImg from "./SPA-4/About/AboutImg";
// import AboutContent from "./SPA-4/About/AboutContent";

const App = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <HeaderFive />,
  //     children: [
  //       { path: "", element: <Home /> },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "skill",
  //         element: <Skill />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderOne />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="/about/img_1" element={<AboutOne />} />
            </Route>
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/* <FetchApiOne>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductHeaderOne />}>
              <Route index element={<Gadgets />} />
              <Route path="/lights" element={<Lights />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FetchApiOne> */}
      {/* <FetchOne /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFour />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="/about/img" element={<AboutImg />} />
              <Route path="/about/text" element={<AboutContent />} />
            </Route>
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <RouterProvider router={router} /> */}
      <FetchTwo />
    </>
  );
};

export default App;
