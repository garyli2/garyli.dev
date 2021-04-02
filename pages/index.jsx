import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactFullpage from "@fullpage/react-fullpage";
import IndexPage from "../components/pages/IndexPage";
import AboutPage from "../components/pages/AboutPage";

import ProjectsPage from "../components/pages/ProjectsPage";

import { useAnimation } from "framer-motion";
import ContactPage from "../components/pages/ContactPage";

export default function App() {
    library.add(fab, faCheckSquare, faCoffee);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    let helloThereControl = useAnimation();

    function playHelloThereAnimation() {
        helloThereControl.start({ scale: [1, 1, 1, 1.25, 1] })
    }

    return (
        <ReactFullpage
            licenseKey="EEE28FDF-1B77449D-98E41EB1-27C3BD71"
            scrollingSpeed={750} /* Options here */
            onLeave={playHelloThereAnimation}
            navigation={true}
            navigationPosition={"right"}
            render={() => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" data-anchor="index">
                            <IndexPage />
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
