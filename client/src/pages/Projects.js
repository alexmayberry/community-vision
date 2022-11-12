import React from "react";
// import { useQuery } from '@apollo/client';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './pages.css';
import {Link} from "react-router-dom";

const Projects = () => {
  return (
    <main>
      <Container id="projects-container">
        <Row>
          <Col id="col">
          <Card id="projects-card" className="text-center" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="bg-primary text-white">PROJECT 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary"><Link to="/Nav"> Project </Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col id="col">
          <Card id="projects-card" className="text-center" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="bg-primary text-white">PROJECT 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col id="col">
          <Card id="projects-card" className="text-center" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="bg-primary text-white">PROJECT 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col id="col">
          <Card id="projects-card" className="text-center" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="bg-primary text-white">PROJECT 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col id="col">
          <Card id="projects-card" className="text-center" style={{ width: "15.5rem" }}>
              <Card.Img variant="top" src="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/06/People-gather-at-Gas-Works-Park.jpg" />
              <Card.Body>
                <Card.Title className="bg-primary text-white">PROJECT 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="secondary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>

        </Row>
        <Row>
          
        </Row> 
        <Row>

        </Row>
      </Container>
    </main>
  );
};

export default Projects;
