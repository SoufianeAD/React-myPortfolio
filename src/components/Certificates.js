import React from "react";
import Contentful from "../api/ContentFul";

class Certificates extends React.Component {

    state = {certificates: []}

    componentDidMount() {
        Contentful.getEntries({ 'content_type' : 'certificates'})
            .then(response => {
                this.setState({certificates: response.items.reverse()});
            });
    }

    renderList() {
        return this.state.certificates.map((elem) => {
            return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-card" key={elem.fields.id}>
                    <div className="portfolio-wrap">
                        <img src={elem.fields.picture.fields.file.url} className="img-fluid" alt="" />
                        <div className="portfolio-links">
                            <a href={elem.fields.picture.fields.file.url} data-gall="portfolioGallery" className="venobox" >
                                <i className="bx bx-zoom-in" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
           <div>
               <section className="portfolio section-bg">
                   <div className="container">

                       <div className="section-title">
                           <h2>Certificates</h2>
                       </div>

                       <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                           {this.renderList()}

                       </div>

                   </div>
               </section>
           </div>
        );
    }
}

export default Certificates;