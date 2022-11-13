import React from "react";
// import { useQuery } from '@apollo/client';
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

if (loading) {
  return <div>Loading...</div>;
}
  return (
    <main>
      <Container id="projects-container">
      <Row xs={1} md={2} lg={3} xl={4}>
          {projects.map((project) => (

          <Col key={project._id} id="col">
            <Card id="projects-card" className="text-center">
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="card-title bg-primary text-white">{project.title}</Card.Title>
                <Card.Text>
                  {project.project_description}
                </Card.Text>
                <Button variant="primary"><Link className="text-white" to={`/main/${project._id}`}> Project </Link></Button>
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
