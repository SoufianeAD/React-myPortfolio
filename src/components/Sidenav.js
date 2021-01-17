import React from "react";
import {Link} from "react-router-dom";

const Sidenav = () => {

    return (
        <div>
            <button type="button" className="mobile-nav-toggle d-xl-none">
                <i className="icofont-navigation-menu" />
            </button>

            <header id="header">
                <div className="d-flex flex-column">

                    <div className="profile">
                        <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light text-center">
                                <Link to="/">AMMY DRISS SOUFIANE</Link>
                            </h1>
                            <div className="social-links mt-3 text-center">
                                <a href="https://github.com/SoufianeAD" target="_blank" className="github">
                                    <i className="bx bxl-github" />
                                </a>
                                <a href="https://www.linkedin.com/in/soufiane-ammy-driss/" target="_blank" className="linkedin">
                                    <i className="bx bxl-linkedin" />
                                </a>
                            </div>
                    </div>

                    <nav className="nav-menu">
                        <ul>
                            <li className="active">
                                <a href="#hero">
                                    <i className="bx bx-home" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <i className="bx bx-user" />
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#resume"><i className="bx bx-file-blank" />
                                <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#skills">
                                    <i className="bx bx-message-square-x" />
                                    <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio">
                                    <i className="bx bx-book-content" />
                                    <span>Portfolio</span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <i className="bx bx-envelope" />
                                    <span>Contact</span>
                                </a>
                            </li>
                            <li>
                                <a href="/FrenchCV.pdf" target="_blank">
                                    <img className="mr-2" src="/assets/img/france.png" />
                                    <span>Download CV</span>
                                </a>
                            </li>
                            <li>
                                <a href="/EnglishCV.pdf" target="_blank">
                                    <img className="mr-2" src="/assets/img/united-states.png" />
                                    <span>Download CV</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <button type="button" className="mobile-nav-toggle d-xl-none">
                        <i className="icofont-navigation-menu" />
                    </button>

                </div>
            </header>
        </div>
    );
}
export default Sidenav;