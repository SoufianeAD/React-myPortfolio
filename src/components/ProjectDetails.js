import React from "react";
import {Link} from "react-router-dom";
import Contentful from "../api/ContentFul";
import _ from "lodash";

class ProjectDetails extends  React.Component {

    state = { project: null };

    componentDidMount() {
        const id = this.props.match.params.id;
        Contentful.getEntries({ 'content_type' : 'projects'})
            .then(response => {
                const p = response.items.filter( elem => {
                     return elem.fields.id == id;
                })[0];
                this.setState({project: p});
            });
    }

    render () {

        if(!this.state.project) {
            return <div>Loading ..</div>;
        }

        return (
            <main id="main">
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Project Details</h2>
                            <ol>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li>Project Details</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="portfolio-details" className="portfolio-details" >
                    <div className="container">

                        <div className="portfolio-details-container">
                            <div className="ui embed">
                                <iframe title="video player" src={this.state.project.fields.video.fields.file.url} />
                            </div>
                        </div>

                        <div className="portfolio-description">
                            <h2 className="w-100">{this.state.project.fields.title}</h2>
                            <p>
                                {this.state.project.fields.description}
                            </p>
                        </div>

                    </div>
                </section>
            </main>
        );
    }
}

export default ProjectDetails;