import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Col, Container, Row } from "reactstrap";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={6}>
            <h3>Personal Info</h3>
            <div className="underline m-0" />
            <ul className="list-unstyled">
              <li>
                <span className="fw-bold">Birthdate: </span>09/11/1994
              </li>
              <li>
                <span className="fw-bold">Email: </span>melmesery@outlook.com
              </li>
              <li>
                <span className="fw-bold">Phone: </span>+20 127 027 8442
              </li>
              <li>
                <span className="fw-bold">Address: </span>Almahallah, 31962
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <ul className="social d-flex align-items-center gap-2 list-unstyled mt-4 justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/e.mesery/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/melmesery"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/mhmd_elmesery/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/melmesery/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
