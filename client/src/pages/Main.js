import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./pages.css";
import Sidebar from "../components/Sidebar";
import Project from './Project';
import Brief from './Brief';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";

function Main() {
  const { projectId } = useParams();
  console.log(projectId);
  const { loading, data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId }
  });

  const project = data?.project || {};
  console.log(project);

  // conditional rendering briefs or projects
  // set briefId when brief is clicked to render brief
  // set briefId to null when project is clicked to render project
  // send function into sidebar to setBriefId onclick
  const [ briefId, setBriefId ] = useState(null)
  
  
  const showBrief = (briefId, setBriefId) => {
    // onclick, store e.target briefId
    // and onclick, close sidebar
  
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container id="project-container flex-row">
      <div id="sidebar">
        <Sidebar briefId={briefId} setBriefId={setBriefId} showBrief={briefId => setBriefId(briefId)} project={project}/>
      <div>
      { !briefId ? (
          <div id="project-tag"><Project project={project}/></div>
      ) : (
        <div id="brief-tag">
          <Brief 
          briefId={briefId} 
          // setBriefId={setBriefId} 
          // showProject={briefId2 => setBriefId(briefId2)} 
          project={project}/>
        </div>
      )}
        </div>
      </div>
    </Container>
   
  );
}


export default Main;
