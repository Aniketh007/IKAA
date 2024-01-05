import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){
    return(
        <nav className={`navbar navbar-expand-lg ${props.className} navbar-light sticky-top p-0 wow fadeIn`}  style={{ fontColor: 'white' }}>
            <Link className="navbar-brand d-flex align-items-center px-4 px-lg-5" to="/">
            <h1>IKAA Hospital</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className= "navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto p-4 p-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#specialists-list">Services</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/experts">Experts</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            </ul>
            </div>
      </nav>
    );
};

export default NavBar;