import React from "react";
import {Link} from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">Web</li>
                                <li data-filter=".filter-card">Mobile</li>
                                <li data-filter=".filter-web">Desktop</li>
                                <li data-filter=".filter-web">Data Science</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-links">
                                        <Link to="/project/details/1" >
                                            <i className="bx bx-link" />
                                        </Link>
                                    </div>
                            </div>
                        </div>
                    </div>

                    </div>
            </section>
        </div>
    );
}
export default Projects;