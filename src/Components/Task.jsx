import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

export const Task = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate("/");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleclick = () => {
    const data = {
      id: uuid(),
      title,
      status,
    };
    axios
      .post("http://localhost:3033/api/tasks", data)
      .then((response) => {
        alert("response has been sent");
      })
      .catch((err) => {
        console.log(err);
      });
    setStatus("");
    setTitle("");
    navigate("/");
  };
  return (
    <div>
      <label>Title:</label>
      <input
        placeholder="Enter title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />
      <br />
      <label>Status:</label>
      <input
        placeholder="Enetr status"
        value={status}
        onChange={handleStatusChange}
      />
      <br />
      <br />
      <button onClick={handleclick}>Create Task</button>
    </div>
  );
};
