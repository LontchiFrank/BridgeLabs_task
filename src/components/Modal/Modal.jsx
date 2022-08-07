import React, { useState } from "react";
import { FaCross, FaTimes } from "react-icons/fa";
import { createCategory } from "../../redux/actions/categories";
import "./Modal.css";

function Modal({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const { name, description } = formData;
  const [selectedImage, setSelectedImage] = useState();
  if (!show) {
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setSelectedImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("image", selectedImage);
    dataToSend.append("name", name);
    dataToSend.append("description", description);

    createCategory(dataToSend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <div className="modal_form">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "2em",
            paddingTop: "1em",
          }}
        >
          <h1>Create New category</h1>
          <FaTimes
            onClick={onClose}
            style={{ fontSize: "22px", marginTop: "12px", marginRight: "2em" }}
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="forms">
          <div className="lay1">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Enter Name Category"
            />
          </div>
          <div className="lay1">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              onChange={(e) => handleChange(e)}
              value={description}
              placeholder="Enter Description"
            />
          </div>

          <div className="lay2">
            <label>Upload Image</label>
            <div className="files_bton">
              <input
                type="file"
                id="file"
                name="img"
                accept="image/*"
                onChange={(e) => handleImageChange(e)}
              />
              <label for="file">Choose File</label>
            </div>
          </div>
          <div className="bton1">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
