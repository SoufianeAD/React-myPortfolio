import React from "react";
import {Link} from "react-router-dom";
import Contentful from "../api/ContentFul";
import _ from "lodash";

class Projects extends  React.Component {

    state = { projects: []}

    componentDidMount() {
        Contentful.getEntries({ 'content_type' : 'projects'})
            .then(response => {
                this.setState({projects: _.sortBy(response.items, e => e.fields.id)})
            });
    }

    renderList() {
        return this.state.projects.map( elem => {
            return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={elem.fields.id}>
                    <div className="portfolio-wrap">
                        <img src={elem.fields.picture.fields.file.url} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <Link to={`/project/${elem.fields.id}`} >
                                <i className="bx bx-plus" />
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>



                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                        {this.renderList()}
                    </div>

                </div>
            </section>
        );
    }
}
export default Projects;