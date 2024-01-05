import React, {useRef} from "react";
import OwlCarousel from "react-owl-carousel";

function Testimonials() {
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
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: '600px' }}>
                        <h1>What Say Our Patients!</h1>
                    </div>
                    <OwlCarousel className="owl-theme" {...options} ref={carouselRef}>
                        <div className="item">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{ width: '100px', height: '100px' }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{ width: '100px', height: '100px' }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="item">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{ width: '100px', height: '100px' }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="custom-nav" style={{position: "absolute",top: "50%",transform: "translateY(-50%)"}}>
                    <i className="fa fa-arrow-left" onClick={slidePrev} style={{position: "absolute",left: "10px"}}></i>
                    <i className="fa fa-arrow-right" onClick={slideNext} style={{position: "absolute", right: "-1300px"}}></i>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;