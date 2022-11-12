import React from "react";
// import {Link} from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./pages.css";
import Sidebar from "../components/Sidebar";
import "../components/Sidebar/sidebar.css";
import Project from './Project';
import Brief from './Brief';

function Nav() {
  return (
    <Container id="project-container">
      <div id="sidebar">
        <Sidebar />
        <div id="content">
          <div id="project-tag"><Project /></div>
          <div id="brief-tag"><Brief /></div>
        </div>
      </div>
    </Container>
   
  );
}

export default Nav;
