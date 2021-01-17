import React from "react";
import About from "./About";
import Education from "./Education";
import Certificates from "./Certificates";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";

const MainPage = () => {
    return (
        <main id="main">
            <Home />
            <About />
            <Education />
            <Certificates />
            <Skills />
            <Projects />
            <Contact />

            <a href="#" className="back-to-top">
                <i className="icofont-simple-up"></i>
            </a>
        </main>
    );
}

export default MainPage;