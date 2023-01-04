import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Container } from "reactstrap";
import '../Styles/Footer.css'

function Footer() {
  return (
    <footer className="py-2">
      <Container>
        <p className="mb-0">
        © 2022 Created with <span><AiOutlineHeart /></span> by Mohamed El-Mesery
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
