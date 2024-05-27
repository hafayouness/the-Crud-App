import React from "react";
import "./edit.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Error updating data", error);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/posts/${id}`, user)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.log("Error updating user data", error);
      });
  };

  return (
    <div className="EditForm">
      <form className="Edit-formulaire">
        <h2 className=" headre-title">Edit User</h2>
        <div>
          <label className="header-input " htmlFor="title">
            Title :
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="element-box input-group-text"
            onChange={handleChange}
            value={user.title}
          />
        </div>
        <div>
          <label className="header-input" htmlFor="author">
            Author :
          </label>
          <input
            className="element-box input-group-text"
            id="author"
            type="text"
            name="author"
            value={user.author}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary  button"
            onClick={handleUpdate}
            type="Button"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
