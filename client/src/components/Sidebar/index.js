// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './sidebar.css';
import NewBrief from '../../pages/NewBrief';


const Sidebar = () => {

  return (
    <Menu>
      <div>
      <NewBrief />
      </div>
     <Card style={{ width: '100%' }}>
      <Card.Img id="nav-image" variant="top" src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg" />
      <Card.Body>
        <Card.Title className="bg-primary text-white">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to="../pages/Brief">Brief</Link></Button>
      </Card.Body>
    </Card>
    </Menu>
  );
};

export default Sidebar;