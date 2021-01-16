import React from "react";
import Contentful from "../api/ContentFul";
import _ from "lodash";

class Education extends React.Component {

    state = {education: [], experiences: []}

    componentDidMount() {
        Contentful.getEntries({ 'content_type' : 'experiences'})
            .then(response => {
                this.setState({experiences: _.sortBy(response.items, e => e.fields.id).reverse()});
            });
        Contentful.getEntries({ 'content_type' : 'education'})
            .then(response => {
                this.setState({education: _.sortBy(response.items, e => e.fields.id).reverse()});
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

    renderEducation() {
        return this.state.education.map((elem) => {
            return (
                <div className="resume-item" key={elem.fields.id}>
                    <h4>{elem.fields.title}</h4>
                    <h5>{elem.fields.date}</h5>
                    <p><em>{elem.fields.institution}</em></p>
                    <ul>
                        <li>
                            {elem.fields.description}
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
                                {this.renderEducation()}
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