import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import NewBrief from "../../pages/NewBrief";
import '../../pages/pages.css';

function Sidebar({
  // briefId, 
  // setBriefId, 
  showBrief, 
  project
}) {

  const [briefId, setBriefId] = useState(null);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBriefClick = (e) => {

    console.log("e.target", e.target.id);
    setBriefId(e.target.id);
    handleClose();
    
  }
  showBrief(briefId);
  console.log("briefId", briefId);



  return (
    <>
      <Button className="sidebar-button" variant="danger" onClick={handleShow}>
        Community Submitted Briefs
      </Button>
      <Offcanvas show={show} onHide={handleClose} backdrop ="true" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Community Submitted Briefs</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="new-brief-btn">
            <NewBrief project={project} />
          </div>
          {project.briefs.map((brief) => (
            <Card key={brief._id} style={{ width: "100%" }}>
              <Card.Img
                // id="brief-img"
                style={{ height: "250px" }}
                variant="top"
                src={brief.image_url}
              />
              <Card.Body>
                <Card.Title className="bg-primary text-white">
                  {brief.title}
                </Card.Title>
                <Card.Text>
                  This text will be a 100 character snippet of the brief content
                  text.
                </Card.Text>
                <Button 
                id={brief._id}
                variant="primary"
                onClick={handleBriefClick}
                >
                  Brief
                  {/* <Link className="text-white" to="../pages/Brief">
                    Brief
                  </Link> */}
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