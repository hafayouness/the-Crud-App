import React, { useState } from "react";
import "./add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    title: "",
    author: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const handleAddUser = () => {
    axios
      .post("http://localhost:3000/posts", newUser)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.log("Error adding user", error);
      });
  };

  return (
    <div className="box">
      <form className="formule-box">
        <h2 className=" headre-title">New User</h2>
        <div>
          <label className="header-input" htmlFor="title">
            Title :
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="element-box input-group-text"
            placeholder=" "
            value={newUser.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="author" className="header-input">
            Author :
          </label>
          <input
            id="author"
            type="text"
            name="author"
            className="element-box input-group-text"
            placeholder=" "
            value={newUser.author}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary  button"
            onClick={handleAddUser}
            type="Button"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
