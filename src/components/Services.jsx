import React from "react";
import { Col, Container, Row } from "reactstrap";
import '../Styles/Services.css';

const Services = () => {
  const services = [
    {
      no: "1",
      des: "Optimizing the user experience.",
    },
    {
      no: "2",
      des: "Using HTML, JavaScript and CSS to bring concepts to life.",
    },
    {
      no: "3",
      des: "Responsive designs on mobile websites.",
    },
    {
      no: "4",
      des: "Creating tools that improve site interaction regardless of the browser.",
    },
    {
      no: "5",
      des: "Following SEO best practices.",
    },
    {
      no: "6",
      des: "Fixing bugs and testing for usability.",
    },
  ];

  return (
    <section className="services" id="services">
      <Container>
        <h3 className="text-center">Services</h3>
        <div className="underline" />
        <Row>
          {services.map((service) => {
            return (
              <Col lg="6" className="service d-flex align-items-baseline gap-2">
                <span>{service.no}</span>
                <div>{service.des}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
