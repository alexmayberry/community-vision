import React, { useState } from "react";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./pages.css";

const Brief = ({
  project, 
  briefId, 
  // setBriefId, 
  // showProject
}) => {

  console.log(project);
  let brief = null;
  for (let i = 0; i < project.briefs.length; i++) {
    if (project.briefs[i]._id === briefId) {
      brief = project.briefs[i];
      console.log("brief", brief);
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  //const [briefId2, setBriefId2] = useState(null);

  // const handleProjectButtonClick = () => {
  //   setBriefId2(null);
  //   //return briefId;
  // }
  // showProject(briefId2);

  return (
        <Container className="seed">
          <h3>{brief.title}</h3>
          <p>{brief.brief_content}</p>
          <Button id="back-to-btn" variant="primary" onClick={refreshPage}>
          <Link className="text-white" to={`/main/${project._id}`}> Back to Project </Link>
          </Button>
          </Container>
  );
};

export default Brief;
