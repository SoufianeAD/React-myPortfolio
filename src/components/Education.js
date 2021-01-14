import React from "react";
import Contentful from "../api/ContentFul";
import _ from "lodash";

class Education extends React.Component {

    state = {education: [], experiences: []}

    componentDidMount() {
        Contentful.getEntries({ 'content_type' : 'experiences'})
            .then(response => {
                console.log(response.items);
                this.setState({experiences: _.sortBy(response.items, e => e.fields.id).reverse()});
            });
    }

    renderExperiences() {
        return this.state.experiences.map((elem) => {
            return (
                <div className="resume-item" key={elem.fields.id}>
                    <h4>{elem.fields.title}</h4>
                    <h5>{elem.fields.date}</h5>
                    <p><em>{elem.fields.company}</em></p>
                    <ul>
                        <li>
                            {elem.fields.content}
                        </li>
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <section id="resume" className="resume section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Resume</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4> Second year in Computer science Engineering</h4>
                                    <h5>2020 - 2021</h5>
                                    <p><em>ENSIIE PARIS-EVRY, FRANCE</em></p>
                                    <ul>
                                        <li>
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>First year of the Master’s Degree in Computer science Engineering</h4>
                                    <h5>2019 - 2020</h5>
                                    <p><em>ESISA FES, MOROCCO</em></p>
                                    <ul>
                                        <li>
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                        </li>
                                    </ul>
                                </div>
                                <div className="resume-item">
                                    <h4>BAC + 3 Degree in Computer science Engineering</h4>
                                    <h5>2016 - 2019</h5>
                                    <p><em>ESISA FES, MOROCCO</em></p>
                                    <ul>
                                        <li>
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                            Et harum quidem rerum facilis est et expedita distinctio. Nam
                                            libero tempore, cum soluta nobis est eligendi
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Professional Experience</h3>
                                {this.renderExperiences()}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Education;