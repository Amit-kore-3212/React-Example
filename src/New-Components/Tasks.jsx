import axios from "axios";
import React, { useEffect, useState } from "react";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clicked]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAddTask = () => {
    const data = {
      id: tasks.length + 1,
      title: title,
      status: status,
    };

    axios
      .post("http://localhost:3033/api/tasks", data)
      .then((response) => {
        console.log(response.data);
        setTitle("");
        setStatus("");
        setClicked(!clicked);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3033/api/tasks/${id}`)
      .then((response) => {
        alert("Data has been deleteded");
        setClicked(!clicked);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>Tasks -{tasks.length}</h3>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.status}</td>
              <td>
                <button onClick={() => handleDelete(ele.id)}>delete</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ paddingTop: "20px" }}>
        <lable>Task </lable>
        <input type={"text"} value={title} onChange={handleChange} />

        <div style={{ paddingTop: "20px" }}>
          <label>Status : </label>
          <input type={"text"} value={status} onChange={handleStatusChange} />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <button onClick={handleAddTask}>Add Tasks</button>
        </div>
      </div>
    </div>
  );
};
