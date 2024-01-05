// import './App.css';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './footer';
import Counter from './counter';
import OwlCarousel from "react-owl-carousel";

function FrontPage() {
  const carouselRef = useRef(null);

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
    },
    slideBy: 1,
    nav: false, // Disable default navigation
    dots: false, // Disable default dots
  };

  return (

    <div id="Home ">
      <NavBar />
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1">
                    <Counter end={80} duration={2} />
                  </h2>
                  <p className="text-white mb-1">Expert Doctors</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1">
                    <Counter end={120} duration={3} />
                  </h2>
                  <p className="text-light mb-0">Medical Stuff</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1">
                    <Counter end={175} duration={3} />
                  </h2>
                  <p className="text-light mb-0">Total Patients</p>
                </div>
              </div>
              <div>
                <a className="btn btn-primary rounded-0 py-4 px-lg-5 btn-custom" style={{ fontSize: '24px' }} href="#Appointment">Appointment <i className="fa fa-arrow-right ms-10"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="container-xxl py-5">
              <div className="container">
                <OwlCarousel className="owl-theme" {...options} ref={carouselRef}>
                <div className="item">
                    <img class="img-fluid mr-5 mb-2" src="Images/home_page.png" style={{ maxWidth: "95%", height: '550px' }} />
                    <div class="owl-carousel-text position-absolute bottom-0 start-50 translate-middle text-center text-white">
                      <h1 class="display-1 mb-0" style={{colour:'black'}}>Neurology</h1>
                    </div>
                  </div>
                  <div className="item">
                    <img class="img-fluid mx-5" src="carousel-1.jpg" style={{ maxWidth: "87%", height: '550px' }} />
                    <div class="owl-carousel-text position-absolute bottom-0 start-50 translate-middle text-center text-white">
                      <h1 class="display-1 mb-0" style={{colour:'black'}}>Cardiology</h1>
                    </div>
                  </div>
                  <div className="item">
                    <img class="img-fluid mx-5" src="Images/login_image.png" style={{ maxWidth: "87%", height: '550px' }} />
                    <div class="owl-carousel-text position-absolute bottom-0 start-50 translate-middle text-center">
                      <h1 class="display-1 mb-3" style={{colour:'black'}}>Physiology</h1>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* <div className="owl-carousel testimonial-carousel">
              <div className="owl-carousel-item">
                <img className="img-fluid mx-auto m-4" src="start-1.png" alt="..." style={{ width: '150px', height: '150px' }} />
                <div>
                  <h2>The best care ever. Recently discharged after the treatment of Brain Tumor. had no confidence of survival but here I am!!</h2>
                  <em>Harvey Specter, FA</em>
                </div>
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid  mx-auto mb-4" src="start-2.png" alt="..." style={{ width: '150px', height: '150px' }} />
                <div>
                  <h2>Never feels like being in a hospital with doctor but in my own house with my family. Great Support.</h2>
                  <em>Mike Ross, Manhattan</em>
                </div>
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid mx-auto mb-4" src="start-3.png" alt="..." style={{ width: '150px', height: '150px' }} />
                <div>
                  <h2>Very Skilled and efficient doctors with a huge success rate. Never felt better!</h2>
                  <em>Don Coreleone, LA</em>
                </div>
              </div>
            </div> */}
            {/* <div className="custom-nav">
              <button className="custom-prev-btn m-2">Prev</button>
              <button className="custom-next-btn">Next</button>
            </div> */}
          </div>

        </div>
      </div>
      <div id="about">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex flex-column">
                  <img className="img-fluid rounded w-75 align-self-end" src="Images/team.png" alt="" />
                  <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="Images/about-2.jpg" alt="" style={{ marginTop: '-25%' }} />
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="mb-4">Why You Should Trust Us? Get To Know Us!</h1>
                <p>At IKAA Hospital, our commitment to excellence and patient-centric care sets us apart. With experienced professionals, cutting-edge technology, and a focus on positive patient experiences, trust us for exceptional healthcare tailored to your well-being.</p>
                <p className="mb-4">We pride ourselves on a legacy of medical expertise and compassionate service. Your health and satisfaction are our top priorities, making IKAA Hospital the trusted choice for comprehensive and reliable healthcare.</p>
                <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Services--> */}
      <div id="specialists-list">
        <h2>Health Care Solutions</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Cardiology</h4>
              <p className="mb-4">Cardiology is a branch of medicine that deals with disorders of the heart, as well as some parts of the circulatory system. A medical professional who specializes in cardiology is known as a cardiologist.</p>
              <Link className="btn" to="/cardiology"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Cancer</h4>
              <p className="mb-4">
                Cancer involves uncontrolled cell division and growth, leading to the invasion of surrounding tissues. It can spread through the blood and lymph systems to other parts of the body.</p>
              <Link className="btn" to="/cancer"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 pb-3 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Kidney</h4>
              <p className="mb-4">The kidneys are vital organs that filter blood, removing waste and excess fluids to produce urine. They play a crucial role in maintaining overall fluid and electrolyte balance in the body.</p>
              <Link className="btn" to="/kidney"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">NeuroSurgery</h4>
              <p className="mb-4">Neurosurgery is a specialized field of surgery focused on treating conditions affecting the nervous system, including the brain and spinal cord. Surgeons in neurosurgery address disorders, tumors, and injuries.</p>
              <Link className="btn" to="/neurosurgery"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Lungs</h4>
              <p className="mb-4">The lungs are vital respiratory organs responsible for oxygenating blood and removing carbon dioxide. Their complex structure facilitates efficient gas exchange in the respiratory system.</p>
              <Link className="btn" to="/lung"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: '65px', height: '65px' }}>
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Orthopedics</h4>
              <p className="mb-4">Orthopedics specializes in the treatment of musculoskeletal disorders, addressing issues related to bones, joints, ligaments, muscles, and tendons. Orthopedic care to improve mobility and alleviate pain.</p>
              <Link className="btn" to="/orthopedic"><i className="fa fa-plus text-primary me-3"></i>Read More</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features --> */}
      <div id="features">
        <div className="container-fluid bg-primary overflow-hidden my-5 ">
          <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 feature-text p-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="p-lg-5 ps-lg-0">
                  <h1 className="text-white mb-4">Why Choose Us</h1>
                  <p className="text-white mb-4 pb-2">Choose IKAA Hospital for a seamless healthcare experience, where cutting-edge technology meets personalized care. Our dedicated team of experts is committed to your well-being, ensuring prompt and effective medical solutions. Experience the difference with our patient-centric approach, making us the preferred choice for your health needs</p>
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: '55px', height: '55px' }}>
                          <i className="fa fa-user-md text-primary"></i>
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Experience</p>
                          <h5 className="text-white mb-0">Doctors</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: '55px', height: '55px' }}>
                          <i className="fa fa-check text-primary"></i>
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Quality</p>
                          <h5 className="text-white mb-0">Services</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: '55px', height: '55px' }}>
                          <i className="fa fa-comment-medical text-primary"></i>
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Positive</p>
                          <h5 className="text-white mb-0">Consultation</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: '55px', height: '55px' }}>
                          <i className="fa fa-headphones text-primary"></i>
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">24 Hours</p>
                          <h5 className="text-white mb-0">Support</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div style={{ color: 'red', fontSize: '16px' }}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="Images/feature.png" style={{objectFit: 'cover'}} alt=""/>
                    </div>
                </div> */}
              <div className="position-relative col-lg-6">
                <img className="position-absolute img-fluid p-3 w-100 h-100" src="Images/feature.png" alt="..." style={{ width: '150px', height: '150px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Appointment --> */}

      <div id="Appointment" className="container">
        <div className="row">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <h1>Make An Appointment With Our Doctor</h1>
            <p>Schedule a personalized consultation with our expert doctors to prioritize your health and well-being. Book an appointment today for comprehensive medical care tailored to your individual needs.</p>
            <div className="bg-light rounded d-flex align-items-center p-5 mb-3">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                <i className="fa fa-phone-alt text-primary"></i>
              </div>
              <div>
                <p>Call Us Now</p>
                <h5>+0123456789</h5>
              </div>
            </div>
            <div className="bg-light rounded d-flex align-items-center p-5">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: '55px', height: '55px' }}>
                <i className="fa fa-envelope-open text-primary"></i>
              </div>
              <div>
                <p>Mail Us Now</p>
                <h5>info@example.com</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-light rounded h-120 d-flex align-items-center p-5">
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: '65px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: '65px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0" placeholder="Enter Mobile Number" style={{ height: '65px' }} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select border-0" style={{ height: '65px' }}>
                      <option selected>Choose Doctor</option>
                      <option value="1">Cardiologist</option>
                      <option value="2">Cancer Specialist</option>
                      <option value="3">Kidney Specialist</option>
                      <option value="4">Lung Specialist</option>
                      <option value="5">Orthopedic</option>
                      <option value="6">Gynecologist</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" date-target-input="nearest">
                      <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Choose Date"
                        data-target="#date" data-toggle="datetimepicker" style={{ height: '65px' }} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="time" id="time" data-target-input="nearest">
                      <input type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{ height: '65px' }} />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0" rows="5" placeholder="Describe Your problem"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 p-3" type="submit">Book Appointment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* <!--Testimonials--> */}
      <div id="Testimonials">
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: '600px' }}>
              <h1>What Say Our Patients!</h1>
            </div>
            <OwlCarousel className="owl-theme" {...options} ref={carouselRef}>
              <div className="item">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="Images/harvey-specter-tile.png" style={{ width: '150px', height: '150px' }} />
                <div class="testimonial-text rounded text-center p-4">
                  <h2>The best care ever. Recently discharged after the treatment of Brain Tumor. had no confidence of survival but here I am!!</h2>
                  <span>Harvey Specter, FA</span>
                </div>
              </div>
              <div className="item">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="Images/mike-ross.png" style={{ width: '150px', height: '150px' }} />
                <div className="testimonial-text rounded text-center p-4">
                  <h2>Never feels like being in a hospital with doctor but in my own house with my family. Great Support.</h2>
                  <span>Mike Ross, Manhattan</span>
                </div>
              </div>
              <div className="item">
                <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="Images/don.png" style={{ width: '150px', height: '150px' }} />
                <div className="testimonial-text rounded text-center p-4">
                  <h2>Very Skilled and efficient doctors with a huge success rate. Never felt better!</h2>
                  <span>Don Coreleone, LA</span>
                </div>
              </div>
            </OwlCarousel>
          </div>
          {/* <div className="custom-nav" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }}>
            <i className="fa fa-arrow-left" onClick={slidePrev} style={{ position: "absolute", left: "10px" }}></i>
            <i className="fa fa-arrow-right" onClick={slideNext} style={{ position: "absolute", right: "10px" }}></i>
          </div> */}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FrontPage;
