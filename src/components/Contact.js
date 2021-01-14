import React, { useState } from "react";
import Map from "./Map";
import emailjs from "emailjs-com";

const renderMap = (weather) => {
    const lat = 48.6343057;
    const lon = 2.4380638;
    return <Map lat={lat} lon={lon} />;
}



const Contact = () => {

    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        emailjs.send("service_f7q988p","template_ifcl5jt",{
            subject: subject,
            from_name: senderName,
            message: message,
            from_email: senderEmail,
        }, "user_ek1lmsgRmlgdAKGpryGQS")
            .then(() => {
                console.log("sent succesfully!");
                setMessage('');
                setSubject('')
                setSenderEmail('');
                setSenderName('');
            });
    }

    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">

                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row" data-aos="fade-in">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="icofont-google-map"></i>
                                    <h4>Location:</h4>
                                    <p>9 SQUARE LAMARTINE, EVRY-COURCOURONNES, 91000 FRANCE</p>
                                </div>

                                <div className="email">
                                    <i className="icofont-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>Soufiane.ammydriss@ensiie.fr</p>
                                </div>

                                <div className="phone">
                                    <i className="icofont-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+33 6 68 77 35 43</p>
                                </div>

                                <div className="">
                                    {renderMap()}
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form onSubmit={onFormSubmit} autoComplete="off" className="php-email-form">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Name</label>
                                        <input type="text" className="form-control"
                                               data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                               value={senderName}
                                               onChange={(event) => setSenderName(event.target.value)}/>
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Your Email</label>
                                        <input type="email" className="form-control"
                                               data-rule="email" data-msg="Please enter a valid email"
                                               value={senderEmail}
                                               onChange={(event) => setSenderEmail(event.target.value)}/>
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control"
                                           data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
                                           value={subject}
                                           onChange={(event) => setSubject(event.target.value)}/>
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" rows="10" data-rule="required"
                                              data-msg="Please write something for us"
                                              value={message}
                                              onChange={(event) => setMessage(event.target.value)}></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary">Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}
export default Contact;