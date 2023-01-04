import React from "react";
import { FaBootstrap, FaReact } from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoGithub,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io";
import { Col, Container, Row } from "reactstrap";
import "../Styles/Skills.css";

const Skills = () => {
  const experties = [
    {
      icon: <IoLogoHtml5 />,
      per: "85%",
    },
    {
      icon: <IoLogoCss3 />,
      per: "70%",
    },
    {
      icon: <IoLogoJavascript />,
      per: "60%",
    },
    {
      icon: <FaBootstrap />,
      per: "80%",
    },
    {
      icon: <IoLogoGithub />,
      per: "60%",
    },
    {
      icon: <FaReact />,
      per: "60%",
    },
    {
      icon: <FaReact />,
      per: "60%",
    },
    {
      icon: <FaReact />,
      per: "60%",
    },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <h3 className="text-center">Experties</h3>
        <div className="underline" />
        <Row className="d-flex align-items-center">
          {experties.map((expert) => {
            return (
              <Col lg="3" xs='6' className="d-flex justify-content-center">
                <div className="skill-icon rounded-3 shadow">
                  <span className="icon">{expert.icon}</span>
                  <span className="per">{expert.per}</span>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
