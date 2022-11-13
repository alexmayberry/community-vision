import React, {useState} from 'react';

// import { Cloudinary } from "@cloudinary/url-gen";
// import ImageUpload from "../components/ImageUpload";

import Allimage from '../components/Allimages';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import "./pages.css";

function NewBrief () {

// const [imagesUploadedList, setImagesUploadedList] = useState([]);  

// const cld = new Cloudinary({
//   cloud: {
//     cloud_name: "cloud_name", //Your cloud name
//     upload_preset: "unsigned_upload_preset" //Create an unsigned upload preset and update this
//   }
// });
// const onImageUploadHandler = (publicId) => {
//   setImagesUploadedList((prevState) => [...prevState, publicId]);
// };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  // };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a New Brief
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Brief</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brief Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brief Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Brief Proposal</Form.Label>
              <Form.Control 
              type="text"
              as="textarea" 
              rows={12}
              placeholder="Brief Content" />
            </Form.Group>
            <div>
            {/* <ImageUpload
                cloud_name={cld.cloudinaryConfig.dkrgydudr}
                upload_preset={cld.cloudinaryConfig.nmqlk7x4}
                onImageUpload={(publicId) => onImageUploadHandler(publicId)}
              /> */}

              <Allimage/>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <div></div>
          <Button variant="primary" onClick={handleClose}>
            Submit Your Brief
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<NewBrief />);
export default NewBrief;
