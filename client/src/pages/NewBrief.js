import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Cloudinary } from "@cloudinary/url-gen";
import ImageUpload from "../components/ImageUpload";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ADD_BRIEF } from "../utils/mutations";
import { useMutation } from '@apollo/client';


import "./pages.css";
import { useParams } from 'react-router-dom';

function NewBrief ({project}) {
  const  params  = useParams();
const [formState, setFormState] = useState({
  title: '',
  brief_content: [''],
  image_url: '',
   project: project._id
});
const [addBrief, { error, data }] = useMutation(ADD_BRIEF);

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });
};

const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);

  try {
    const { data } = await addBrief({
      variables: { entry: { ...formState } },
    });
    handleClose();

  } catch (e) {
    console.log("you had an error in your brief creation");
    console.error(e);
  }
};

const [image, setImagesUploadedList] = useState([]);  

const cld = new Cloudinary({
  cloud: {
    cloud_name: "cloud_name", //Your cloud name // I'm going to paste the cloud_name here to see if that helps
    upload_preset: "unsigned_upload_preset" //Create an unsigned upload preset and update this // I'm going to paste the preset here to see if that helps
  }
});
const onImageUploadHandler = (publicId) => {
  setImagesUploadedList((prevState) => [...prevState, publicId]);
};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {data ? (
              <p>
                Success! Brief Submitted!
              </p>
            ) : (
              <>
                <Button variant="danger" onClick={handleShow}>
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
                          name="title"
                          value={formState.title}
                          onChange={handleChange}
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
                        name="brief_content"
                        value={formState.brief_content}
                        onChange={handleChange}
                        rows={12}
                        placeholder="Brief Content" />
                      </Form.Group>
                      <div>
                      <ImageUpload
                          cloud_name={cld.cloudinaryConfig.dkrgydudr}
                          upload_preset={cld.cloudinaryConfig.nmqlk7x4}
                          onImageUpload={(publicId) => onImageUploadHandler(publicId)}
                          // store result.info.url in formState.image_url
                        />
                      </div>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <div></div>
                    <Button variant="primary" onClick={handleFormSubmit}>
                      Submit Your Brief
                    </Button>
                  </Modal.Footer>
                </Modal>
                </>
                )}
{/* 
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )} */}
    </>
  )
}

// render(<NewBrief />);
export default NewBrief;
