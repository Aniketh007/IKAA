import React from 'react';

function Contact(){
    return(
        <div>
            <div class="container my-5">
                <div class="row g-4">
                    <div class="col-lg-4">
                        <div class="h-100 bg-primary rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:'55px',height:'55px'}} >
                                <i class="fa fa-map-marker-alt text-primary"></i>
                            </div>
                            <div>
                                <p>Address</p>
                                <h5>Chappman Avenue, California, USA</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:'55px',height:'55px'}} >
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div>
                                <p>Call Us</p>
                                <h5>+0123456789</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:'55px',height:'55px'}} >
                                <i class="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div>
                                <p>Mail Us Now</p>
                                <h5>info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="bg-light p-5">
                            <h1>Have Queries? Please Contact Us!</h1>
                            <p>For inquiries, please feel free to contact us. If you have specific questions or requests, you can also reach out by filling the form provided.</p>
                            <form />
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" id="message" placeholder="Leave a message here" style={{height:'100px'}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn">
                        <div className="h-100" style={{ minHeight: '400px' }}>
                            <iframe
                                className="rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9642486727753!2d-117.9646242!3d33.7886339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd78621720a0f%3A0x4026fd630b625a54!2sChapman%20Ave%2C%20Garden%20Grove%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1668895812355!5m2!1sen!2s"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;