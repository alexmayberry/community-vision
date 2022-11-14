import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import "./pages.css";


const Project = ({project}) => {
  return (
    <main>
      <Container className="seed">
        <h3>{project.title}</h3>
        <h5>Description</h5>
          <p>{project.project_description}</p>
          <h5>Intro</h5>
          <p>{project.intro}</p>
          <h5>Project Requirements</h5>
          {project.project_reqs.map((req, index) => (
            <p key={index}>{req}</p>
          ))}
          <h5>Brief Requirements</h5>
          {project.brief_reqs.map((req, index) => (
            <p key={index}>{req}</p>
          ))}
          <h5>Budget</h5>
          <p>{project.budget_description}</p>
      </Container>
    </main>
  );
};

export default Project;
