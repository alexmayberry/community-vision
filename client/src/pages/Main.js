import React from "react";
// import {Link} from "react-router-dom";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./pages.css";
import Sidebar from "../components/Sidebar";
import "../components/Sidebar/sidebar.css";
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

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container id="project-container">
      <div id="sidebar">
        <Sidebar project={project}/>
        <div id="content">
          <div id="project-tag"><Project project={project}/></div>
          <div id="brief-tag"><Brief /></div>
        </div>
      </div>
    </Container>
   
  );
}

export default Main;
