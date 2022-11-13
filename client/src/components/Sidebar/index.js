// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './sidebar.css';
import NewBrief from '../../pages/NewBrief';


const Sidebar = ({project}) => {

  return (
    <Menu>
      <div>
      <NewBrief project={project}/>
      </div>
      {project.briefs.map((brief) => (

        <Card style={{ width: '100%' }}>
      <Card.Img id="nav-image" variant="top" src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg" />
      <Card.Body>
        <Card.Title className="bg-primary text-white">{ brief.title }</Card.Title>
        <Card.Text>
          This text will be a 100 character snippet of the brief content text.
        </Card.Text>
        <Button variant="primary"><Link to="../pages/Brief">Brief</Link></Button>
      </Card.Body>
    </Card>
       ))}
    </Menu>
  );
};

export default Sidebar;