// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './sidebar.css';

const Sidebar = () => {
  return (
    <Menu>
     <Card style={{ width: '15.5rem' }}>
      <Card.Img id="nav-image" variant="top" src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg" />
      <Card.Body>
        <Card.Title className="bg-primary text-white">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to="..">Brief</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15.5rem' }}>
      <Card.Img id="nav-image" variant="top" src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg" />
      <Card.Body>
        <Card.Title className="bg-primary text-white">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to="..">Brief</Link></Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '15.5rem' }}>
      <Card.Img id="nav-image" variant="top" src="https://bergerpartnership.com/wp-content/uploads/2016/05/Project-page-feature-image-Cal-Anderson.jpg" />
      <Card.Body>
        <Card.Title className="bg-primary text-white">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to="..">Brief</Link></Button>
      </Card.Body>
    </Card>
    </Menu>
  );
};

export default Sidebar;