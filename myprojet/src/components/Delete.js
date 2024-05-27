import React from "react";

export default function Delete({ id, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}
