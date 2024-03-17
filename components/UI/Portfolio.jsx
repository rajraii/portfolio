import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import SectionSubtitle from "./SectionSubtitle";

import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("frontend");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "frontend") {
      const filteredData = portfolioData.filter(
        (item) => item.category[0] === filter || item.category[1] === filter
      );

      setData(filteredData);
    }

    if (filter === "full-stack") {
      const filteredData = portfolioData.filter(
        (item) => item.category[0] === filter || item.category[1] === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "frontend" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("frontend")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "full-stack" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("full-stack")}
              >
                Full Stack
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
