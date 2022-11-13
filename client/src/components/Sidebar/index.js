import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import NewBrief from "../../pages/NewBrief";
import '../../pages/pages.css';

function Sidebar({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="sidebar-button" variant="primary" onClick={handleShow}>
        Brief List
      </Button>
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Briefs</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="new-brief-btn">
            <NewBrief project={project} />
          </div>
          {project.briefs.map((brief) => (
            <Card style={{ width: "100%" }}>
              <Card.Img
                id="nav-image"
                variant="top"
                src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg"
              />
              <Card.Body>
                <Card.Title className="bg-primary text-white">
                  {brief.title}
                </Card.Title>
                <Card.Text>
                  This text will be a 100 character snippet of the brief content
                  text.
                </Card.Text>
                <Button variant="primary">
                  <Link className="text-white" to="../pages/Brief">
                    Brief
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
