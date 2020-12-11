import React from "react";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import IndexPage from "./pages/IndexPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import "./assets/fullpage.css";
import ProjectsPage from "./pages/ProjectsPage";

import { motion, useAnimation } from "framer-motion"
import ContactPage from "./pages/ContactPage";

export default function App() {
  library.add(fab, faCheckSquare, faCoffee);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  let helloThereControl = useAnimation();

  function playPage1HelloThereAnimation() {
    console.log("Starting animation for page 1 hello there...");
    console.log(helloThereControl.start({scale: [1, 1, 1, 1.25, 1] }));
  }

  return (
    <ReactFullpage
      scrollingSpeed={750} /* Options here */
      onLeave={playPage1HelloThereAnimation}
      navigation= {true}
      navigationPosition= {'right'}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="index">
              <IndexPage  />
            </div>

            <div className="section" data-anchor="about">
              <AboutPage helloThereControl={helloThereControl} />
            </div>

            <div className="section" data-anchor="projects">
              <ProjectsPage />
            </div>

            <div className="section" data-anchor="contact">
              <ContactPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
