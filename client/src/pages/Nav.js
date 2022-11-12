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
// import { Link } from 'react-router-dom';

function Nav() {
  return (
    <Container id="project-container">
      <div id="sidebar">
        <Sidebar />
        <div id="page-wrap">
          <h1><Project /></h1>
          <h1> OR </h1>
          <h1><Brief /></h1>
        </div>
      </div>
    </Container>
  );
}

export default Nav;
