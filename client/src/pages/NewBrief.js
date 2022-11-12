import React, {useState} from 'react';

import { Cloudinary } from "@cloudinary/url-gen";
import ImageUpload from "../components/ImageUpload";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Link } from 'react-router-dom';
import "./pages.css";

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [addUser, { error, data }] = useMutation(ADD_USER);

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
  

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }

const NewBrief = () => {
  
const [imagesUploadedList, setImagesUploadedList] = useState([]);  


const cld = new Cloudinary({
  cloud: {
    cloud_name: "cloud_name", //Your cloud name
    upload_preset: "unsigned_upload_preset" //Create an unsigned upload preset and update this
  }
});
const onImageUploadHandler = (publicId) => {
  setImagesUploadedList((prevState) => [...prevState, publicId]);
};

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);
  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">New Brief</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Brief Title"
                name="title"
                type="text"
                //   value={formState.name}
                //   onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Date"
                name="date"
                type="text"
                //   value={formState.email}
                //   onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="brief content"
                name="brief_content"
                type="text"
                //   value={formState.password}
                //   onChange={handleChange}
              />
              <ImageUpload
                cloud_name={cld.cloudinaryConfig.dkrgydudr}
                upload_preset={cld.cloudinaryConfig.nmqlk7x4}
                onImageUpload={(publicId) => onImageUploadHandler(publicId)}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default NewBrief;
