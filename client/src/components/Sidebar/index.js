import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";
import NewBrief from "../../pages/NewBrief";
import '../../pages/pages.css';
import { BsArrowBarRight } from "react-icons/bs";

// brief description trimming function
// call trimming function in component in map loop and add brief.description as parameter
const descTrim = (content) => {
  // run trimming function on string parameter
  const trim = content[0].substring(0, 80);
  // return trimmed string
  return `${trim}...`;
}


function Sidebar({
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
      <Button className="sidebar-button btn-text" variant="primary" onClick={handleShow} active>
        < BsArrowBarRight className="svg-content"/>
        <div>Community Submitted Briefs</div>
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
                 {descTrim(brief.brief_content)}
                </Card.Text>
                <Button 
                id={brief._id}
                variant="primary"
                onClick={handleBriefClick}
                >
                  Brief
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