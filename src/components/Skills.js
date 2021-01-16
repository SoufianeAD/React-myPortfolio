import React from "react";
import Contentful from "../api/ContentFul";
import _ from "lodash";

class Skills extends React.Component {

    state = {skills: []};

    componentDidMount() {
        Contentful.getEntries({ 'content_type' : 'skills'})
            .then(response => {
                this.setState({skills: _.sortBy(response.items, e => e.fields.id)});
            });
    }

    renderList() {
        return this.state.skills.map(elem => {
            return (
                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" key={elem.fields.id}>
                    <div className="icon"><i className={elem.fields.icon}></i></div>
                    <h4 className="title vertical-center" ><a href="">{elem.fields.title}</a></h4>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <section id="skills" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>

                        <div className="row">
                            {this.renderList()}
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}
export default Skills;