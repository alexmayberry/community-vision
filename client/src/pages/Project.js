import React from "react";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
// import { Link } from 'react-router-dom';
import "./pages.css";


const Project = ({project}) => {
  return (
    <main>
      <Container>
        <h1>{project.title}</h1>
        <h2>Description</h2>
          <p>{project.project_description}</p>
          <h2>Intro</h2>
          <p>{project.intro}</p>
          <h2>Project Requirements</h2>
          {project.project_reqs.map((req) => (
            <p>{req}</p>
          ))}
          <h2>Brief Requirements</h2>
          {project.brief_reqs.map((req) => (
            <p>{req}</p>
          ))}
          <h2>Budget</h2>
          <p>{project.budget_description}</p>
      </Container>
    </main>
  );
};

export default Project;
