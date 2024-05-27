import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="Nav-bar">
      <Link to="/" className="Crudstyle">
        Crud
      </Link>

      <Link to="/add" className="addStyle">
        add
      </Link>
    </div>
  );
}
