import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HambergerIcon } from "./HambergerIcon";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [isDelete, setDelete] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete]);

  const handleClick = () => {
    navigate("/new");
  };

  const handleUpdate = (id) => {
    navigate(`/task/${id}`);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You sure?");
    if (confirm) {
      axios
        .delete(`http://localhost:3033/api/tasks/${id}`)
        .then((resposne) => {
          console.log(resposne.data);
          setDelete(!isDelete);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingRight: "20px",
          border: "1px solid #232a35",
          borderRadius: "5px",
          alignItems: "center",
          height: "60px",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <p>My studio builder</p>
          <button onClick={handleClick}>Create Task</button>
          <HambergerIcon />
        </div>
      </div>
      <div>
        {tasks.length > 0 ? (
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Status</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {tasks.map((ele) => (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.status}</td>
                  <td>
                    <button onClick={() => handleUpdate(ele.id)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(ele.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>No Data Abavialble</h3>
        )}
      </div>
    </div>
  );
};
