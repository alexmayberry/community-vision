import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './pages.css';
import {Link} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";


const Projects = () => {

const { loading, data } = useQuery(QUERY_PROJECTS);
const projects = data?.projects || [];

const briefsAry = [];
if (data) {
  for (let i = 0; i < projects.length; i++) {
    const briefLength = projects[i].briefs.length;
    briefsAry.push(briefLength);
  }
}

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <main>
      <Container id="projects-container">
      <Row xs={1} md={2} lg={3} xl={4}>
          {projects.map((project, index) => (

          <Col key={project._id} id="col" className="d-flex flex-column mt-auto">
            <Card id="projects-card" className="text-center mt-auto">
              <Card.Header >{briefsAry[index]} Briefs submitted</Card.Header>
              <Card.Img id="projects-img" variant="top" src={`${project.image_url}`} />
              <Card.Body>
                <Card.Title className="card-title bg-primary text-white">{project.title}</Card.Title>
                <Card.Text id="project-text">
                  {project.project_description}
                </Card.Text>
                <div>
                <Button id="project-btn" variant="primary"><Link className="text-white" to={`/main/${project._id}`}> Project </Link></Button>
                </div>
               
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>
    </main>
  );
};

export default Projects;
