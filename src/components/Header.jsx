import React from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import { HashLink } from "react-router-hash-link";
import { Row } from "reactstrap";
import logo from "../Assets/Images/logo.png";
import "../Styles/Header.css";


function Header() {
  function showMenu() {
    const list = document.getElementById("menu").classList;
    list.remove("hidden");
  }
  function hideMenu() {
    const list = document.getElementById("menu").classList;
    list.add("hidden");
  }
  function hideMenuBtn() {
    const list = document.querySelector(".menu-btn").classList;
    list.add("hidden");
  }
  function showMenuBtn() {
    const list = document.querySelector(".menu-btn").classList;
    list.remove("hidden");
  }
  function showCloseBtn() {
    const list = document.querySelector(".close-btn").classList;
    list.remove("hidden");
  }
  function hideCloseBtn() {
    const list = document.querySelector(".close-btn").classList;
    list.add("hidden");
  }

  return (
    <header className="fixed-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img src={logo} alt="logo" className="logo-img py-2" />
          </div>
          <div
            className="menu-btn"
            onClick={() => {
              showMenu();
              hideMenuBtn();
              showCloseBtn();
            }}
          >
            <CgChevronDown />
          </div>
          <div
            className="close-btn hidden"
            onClick={() => {
              hideMenu();
              showMenuBtn();
              hideCloseBtn();
            }}
          >
            <CgChevronUp />
          </div>
        </div>
      </div>

      <div className="menu hidden pt-2" id="menu">
        <div className="container">
          <Row className="d-flex align-items-center">
            <ul className="list-unstyled">
              <li className="LINK">
                <HashLink smooth to="#hero">
                  Home
                </HashLink>
              </li>
              <li className="LINK">
                <HashLink smooth to="#about">
                  About
                </HashLink>
              </li>
              <li className="LINK">
                <HashLink smooth to="#skills">
                  Technology
                </HashLink>
              </li>
              <li className="LINK">
                <HashLink smooth to="#services">
                  Services
                </HashLink>
              </li>
              <li>
                <a
                  className="nav-link resume p-1"
                  href="https://drive.google.com/file/d/1qE6HRn8j1ByqyDZYBLclG8u2J9NxW7vK/view?usp=share_link"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </Row>
        </div>
      </div>
    </header>
  );
}

export default Header;
