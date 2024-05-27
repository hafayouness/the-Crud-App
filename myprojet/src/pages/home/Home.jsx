import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "../../components/Delete";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts`)

      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <div>
      <h2 className="header-title">All Post</h2>
      <table className="table table-bordered border-primary  table-style">
        <thead>
          <tr>
            <th className="title header-t">Title</th>
            <th className="title header-t">Author</th>
            <th className="title header-t">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* met ca en terminal pour m'affiche data: json-server --watch db.json --port 3000 */}

          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.author}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/edit-user/${post.id}`}
                  className="btn btn-primary acces-btn "
                >
                  Edit
                </Link>
                <Link to={`/users/${post.id}`} className="btn btn-info ">
                  Show
                </Link>
                <Delete id={post.id} onDelete={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
