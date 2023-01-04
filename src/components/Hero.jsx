import React from "react";
import { Col, Container, Row } from "reactstrap";
import Profile from "../Assets/Images/profile.jpg";
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="main" id="hero">
      <div className="hero">
        <Container className="hero-data">
          <Row className=" d-flex align-items-center justify-content-center">
            <Col lg="4" className="text-center">
              <img
                src={Profile}
                alt="Mohamed Elmesery"
                className="hero-img"
                title="Mohamed Elmesery"
              />
            </Col>
            <Col lg="12">
              <div className="title">
                <h1>
                  <span>Frontend Developer</span>
                  <br /> Mohamed Elmesery
                </h1>
              </div>
              <p className="fs-4">
                High level experience in web design and development knowledege,
                <br /> producing quality work.
              </p>
              <div className="email">
                <a
                  className="nav-link"
                  href="mailto: melmesery@outlook.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Contact Me
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
