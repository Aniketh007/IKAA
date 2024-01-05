import React from 'react';
import Footer from './footer';
import NavBar from './navBar';

function Experts(){
    return(
        <div>
            <NavBar/>
        <div className="container text-center">
            <h1 className="my-5">Our Experience Doctors</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden align-items-center">
                                <img src="Images/Ross-Geller.png" alt="..." style={{width: '360px', height: '330px'}}/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Ross Geller</h3>
                                <p>DERMATOLOGIST|MBBS, DDVL</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="twitter.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="instagram.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img src="Images/Sheldon-Copper.png" alt=".." style={{width: '360px', height: '330px'}}/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Sheldon Cooper</h3>
                                <p>CARDIOLOGIST|MBBS, MD</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img src="Images/Phil-Dunphy.png" alt=".." style={{width: '360px', height: '330px'}}/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Phil Dunphy</h3>
                                <p>KIDNEY SPECIALIST|MBBS, DDVL</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img src="Images/Walter-white.png" alt=".." style={{width: '360px', height: '330px'}}/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Walter White</h3>
                                <p>CANCER SPECIALIST|MBBS, MD</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img src="Images/Barney-Stinson.png" alt=".." style={{width: '360px', height: '330px'}}/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Barney Stinson</h3>
                                <p>GYNECOLOGIST|MBBS, DDVL</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="doctors-card">
                        <div className="team-item position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img style={{width: '360px', height: '330px'}} src="Images/Jake-Peralta.png" alt=".."/>
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                <h3>Dr. Jake Peralta</h3>
                                <p>ORTHOPEDIC|MBBS, DDVL</p>
                                <div className="team-social text-center">
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square" href="facebook.com"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
}

export default Experts;