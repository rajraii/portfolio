import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/future/image";
import BgAnimation from "./BackgroundAnimation";
import logo from "../../public/images/logo.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row className={`${classes.hero__grid}`}>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Raj Rai</h2>
              <h5 className="mb-4">Software Developer Engineer</h5>
              <p>
                "Fueled by a passion for creating seamless user experiences and
                products, I bring Year of Experience in software & front-end
                development to the table, ready to make a positive impact on any
                project."
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <a href="https://github.com/rajraii" target="_blank">
                    Connect on GitHub
                  </a>
                </button>

                <button className="secondary__btn">
                  <a
                    href="https://drive.google.com/file/d/11uyVxVMohwGUnLMwrrNl97qlAAbkg5Ch/view"
                    target="_blank"
                  >
                    Go to CV
                  </a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image src={logo} className={classes.hero_avatar} />
              <BgAnimation />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
