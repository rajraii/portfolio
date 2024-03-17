import React from "react";
import { FaAws, FaNodeJs, FaPython } from "react-icons/fa";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { IoLogoReact } from "react-icons/io5";
import { SiAntdesign, SiDjango, SiExpress, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandBootstrap, TbBrandFirebase, TbBrandNextjs } from "react-icons/tb";
import { Col, Container, Row } from "reactstrap";
import classes from "../../styles/services.module.css";
import SectionSubtitle from "./SectionSubtitle";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Web Development" icon="ri-apps-line" />

                <ServicesItem title="Full stack Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="User Interface"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              I&apos;ve worked with a range a technologies in the web
              development world. experienced in leading cross- functional teams
              in a time-pressured setting to complete projects on schedule and
              within budget. Strong skills include:
            </p>

            <Row>
              <Col lg="3" md="6" xs="6">
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <ImHtmlFive />
                  </span>
                  HTML5
                </h6>


                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <ImCss3 />
                  </span>
                  CSS3
                </h6>
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <TbBrandBootstrap />
                  </span>
                  Bootstrap
                </h6>
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                  <SiAntdesign />
                  </span>
                  AntD
                </h6>
              </Col>

              <Col lg="3" md="6" xs="6">
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.4em"
                        height="1.4em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8v-.5Zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5v-4Zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7Z"
                        />
                      </svg>
                    </i>
                  </span>
                  Javascript
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <SiTypescript />
                  </span>
                  Typescript
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                  <FaPython />
                  </span>
                  Python
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <IoLogoReact />
                  </span>
                  ReactJs
                </h6>
              </Col>

              <Col lg="3" md="6" xs="6">
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <SiRedux className={`${classes.about__icon}`} />
                  Redux
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <TbBrandNextjs />
                  </span>
                  NextJs
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <FaNodeJs className={`${classes.about__icon}`} />
                  NodeJs
                </h6>
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <FaAws className={`${classes.about__icon}`} />
                  AWS
                </h6>
              </Col>

              <Col lg="3" md="6" xs="6">
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <SiMongodb />
                  </span>
                  MongoDB
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <SiExpress />
                  </span>
                  ExpressJs
                </h6>

                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <TbBrandFirebase />
                  </span>
                  Firebase
                </h6>
                <h6
                  className={` d-flex align-items-center gap-2 mt-3 fw-normal ${classes.skills_icon}`}
                >
                  <span className={`${classes.about__icon}`}>
                    <SiDjango />
                  </span>
                  Django
                </h6>
                
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
