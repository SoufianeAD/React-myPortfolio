import React from "react";
import Sidenav from "./Sidenav";
import Home from "./Home"
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

const App = () => {
    return (
        <div>
            <Sidenav />
            <Home />
            <main id="main">
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <a href="#" className="back-to-top">
                <i className="icofont-simple-up"></i>
            </a>
        </div>
    );
}

export default App;