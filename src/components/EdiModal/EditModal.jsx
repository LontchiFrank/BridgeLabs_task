import React, { useState } from "react";
import { FaCross, FaTimes } from "react-icons/fa";
import { _updateCategory } from "../../redux/actions/categories";
import Alert from "../alert/Alert";
import "../Modal/Modal.css";

function EditModal({ show, onClose, category }) {
  const [showing, setShowing] = useState(false);
  const [createState, setCreateState] = useState("");
  const [formData, setFormData] = useState({
    name: category.name,
    description: category.description,
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
  const id = category.id;
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("image", selectedImage);
    dataToSend.append("name", name);
    dataToSend.append("description", description);
    console.log(dataToSend, id);
    _updateCategory(dataToSend, id)
      .then((res) => {
        setCreateState(true);
        console.log(res);
      })
      .catch((err) => {
        setCreateState(false);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="main2">
        <Alert
          bool={showing}
          toggleAlert={() => setShowing(!showing)}
          type={createState == true && "success"}
          shows={showing}
        />
        <div className="modal_form">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: "2em",
              paddingTop: "1em",
            }}
          >
            <h1>Edit Category</h1>
            <FaTimes
              onClick={onClose}
              style={{
                fontSize: "22px",
                marginTop: "12px",
                marginRight: "2em",
              }}
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
    </div>
  );
}

export default EditModal;
