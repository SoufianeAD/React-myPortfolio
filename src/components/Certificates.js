import React from "react";

class Certificates extends React.Component {

    render() {
        return (
           <div>
               <section className="portfolio section-bg">
                   <div className="container">

                       <div className="section-title">
                           <h2>Certificates</h2>
                       </div>

                       <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                           <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                               <div className="portfolio-wrap">
                                   <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                   <div className="portfolio-links">
                                       <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" >
                                           <i className="bx bx-zoom-in" />
                                       </a>
                                   </div>
                               </div>
                           </div>

                       </div>

                   </div>
               </section>
           </div>
        );
    }
}

export default Certificates;