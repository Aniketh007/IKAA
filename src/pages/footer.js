import React from 'react';
import { Link } from 'react-router-dom';

const Footer=()=>{
    return(
        <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Chappman Avenue, California</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <button className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-twitter"></i></button>
                        <button className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-facebook-f"></i></button>
                        <button className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-youtube"></i></button>
                        <button className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-linkedin-in"></i></button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Services</h5>
                    <Link className="btn btn-link" to="/cancer">Cancer</Link>
                    <Link className="btn btn-link" to="/cardiology">Cardiology</Link>
                    <Link className="btn btn-link" to="/neurosurgery">NeuroSurgery</Link>
                    <Link className="btn btn-link" to="/kidney">Kidney</Link>
                    <Link className="btn btn-link" to="/lung">Lungs</Link>
                    <Link className="btn btn-link" to="/orthopedic">Orthopedics</Link>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="#about">About Us</a>
                    <a className="btn btn-link" href="#specialists-list">Our Services</a>
                    <a className="btn btn-link" href="#features">Features</a>
                    <a className="btn btn-link" href="#Testimonials">Testimonials</a>
                    <a className="btn btn-link" href="#Appointment">Appointment</a>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default Footer;