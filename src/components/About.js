import React from "react"

const About = () => {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Computer Science Engineering Student.</h3>
                            <div className="row mt-4">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="icofont-rounded-right"/>
                                            <strong>Birthday:</strong> 20 April 1997
                                        </li>
                                        <li>
                                            <i className="icofont-rounded-right" />
                                            <strong>Phone:</strong> +33 6 68 77 35 43
                                        </li>
                                        <li>
                                            <i className="icofont-rounded-right" />
                                            <strong>City:</strong> PARIS-EVRY, FRANCE
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="icofont-rounded-right" />
                                            <strong>Age:</strong> 23
                                        </li>
                                        <li>
                                            <i className="icofont-rounded-right" />
                                            <strong>Degree:</strong> Enginnering Student
                                        </li>
                                        <li>
                                            <i className="icofont-rounded-right" />
                                            <strong>Email:</strong> Soufiane.ammydriss@ensiie.fr
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Ambitious, motivated, enthusiastic, fast learner and hard worker.
                                Passionate about software engineering and development technologies. I always strive to achieve
                                the highest standard possible at any given task and in any situation,
                                I’m also accustomed to work in challenging and fast-paced environment.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
export default About;