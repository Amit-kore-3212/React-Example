import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateTask = () => {
  const [task, setTask] = useState(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3033/api/tasks/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setStatus(response.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = () => {
    const data = {
      title,
      status,
    };

    axios
      .put(`http://localhost:3033/api/tasks/${id}`, data)
      .then((response) => {
        setTitle(response.data.title);
        setStatus(response.data.status);
        alert("updated SuccessFully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>UpdateTask</h3>
      {
        <div>
          <label> title : </label>
          <input type={"text"} value={title} onChange={handleTitleChange} />
          <br />
          <br />
          <label> Status : </label>
          <input type={"text"} value={status} onChange={handleStatusChange} />
          <br />
          <br />
          <button onClick={handleUpdate}>Update Task</button>
        </div>
      }
    </div>
  );
};
