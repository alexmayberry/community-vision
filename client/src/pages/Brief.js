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
    <main>
        <Container className="seed">
        <Button variant="primary" onClick={refreshPage}>
          <Link className="text-white" to={`/main/${project._id}`}> View Project </Link>
          </Button>
          {/* <button onClick={handleProjectButtonClick}>View Project</button> */}
          <h3>{brief.title}</h3>
          <p>{brief.brief_content}</p>
          </Container>
    </main>
  );
};

export default Brief;
