import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Hey visitor, Nice to have you here. Please drop a mail for
              buiseness synergies or if you wannt to have a chill conversation
              on novels ; {")"} And i will get back to you shortly.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Delhi - India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>rajrai.dv@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>9015939949</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <a href="https://github.com/rajraii" target={"_blank"} rel='noreferrer'>
                <i className="ri-github-line"></i>
              </a>
              <a href="https://www.linkedin.com/in/rajraii/" target={"_blank"} rel='noreferrer'>
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
