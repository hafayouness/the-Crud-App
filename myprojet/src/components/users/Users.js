import React, { useEffect, useState } from "react";
import "./users.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Users() {
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
        console.log("error fetching user data:", user);
      });
  }, [id]);
  return (
    <div className="user-formulaire">
      <h2 className="headerUser"> user Details </h2>

      <p className="textbody">
        <strong>Title :</strong>
        {user.title}
      </p>
      <p className="textbody">
        <strong>Author :</strong>
        {user.author}
      </p>
    </div>
  );
}

export default Users;
