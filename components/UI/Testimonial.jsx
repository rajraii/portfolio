import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import test1 from "../../public/images/testimonial_1.png";
import test2 from "../../public/images/testimonial_2.png";
import test3 from "../../public/images/testimonial_3.png";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my colleagues say about me</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src={test1}
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Hitesh Datt</h6>
                    <h6>Senior Software Engineer</h6>
                    <h6>Farzi Engineer</h6>
                  </div>
                </div>

                <p>
                  Raj is creative and has a never-give-up attitude. He has a
                  good understanding of frontend development technologies and
                  contributed well to the projects and tasks assigned to him
                  whilst working in FarziEngineer.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src={test2}
                    width="50"
                    height={20}
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Nikunj Aggarwal</h6>
                    <h6>Software Developer Engineer</h6>
                    <h6>BharatPe</h6>
                  </div>
                </div>

                <p>
                  Raj is a hardworking student. He has the never give-up spirit.
                  Even when the conditions are not good, he tries his best to do
                  what he can. He has a good understanding of Data Structures &
                  Algorithms and Front-end. He is really creative and
                  innovative.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src={test3}
                    width="50"
                    height={20}
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Saurav Ahmed</h6>
                    <h6>Software Developer Engineer</h6>
                    <h6>Veridic Solutions</h6>
                  </div>
                </div>

                <p>
                  Raj is imaginative and possesses a spirit of perseverance. He
                  made a significant contribution to the projects and tasks that
                  were given to him while working at Veridic because he has a
                  solid understanding of frontend development technology. He is
                  incredibly inventive and imaginative.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
