import React, { useEffect, useState } from "react";
import { HomeIcon } from "../Icons/HomeIcon";
import "../Style.css";

const data = [
  {
    id: "1",
    filmName: "3 Idiots",
    watched: true,
  },
  {
    id: "2",
    filmName: "Dangal",
    watched: false,
  },
  {
    id: "3",
    filmName: "Bahubali",
    watched: false,
  },
  {
    id: "4",
    filmName: "Money Heist",
    watched: true,
  },
];

export const DeleteOperation = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setInfo(data);
  }, []);

  const handleDelete = (id) => {
    const index = info.findIndex((ele) => ele.id == id);
    const confirm = window.confirm("Are You Sure ?");
    if (confirm) {
      info.splice(index, 1);

      setInfo([...info]);
    }

    // setInfo(info.filter((ele) => ele.id !== id));
  };

  const handleCheckBox = (e, id) => {
    const findElement = info.find((ele) => ele.id == id);
    if (findElement) {
      findElement.watched = e.target.checked;
      setInfo([...info]);
    }
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>FilmName</td>
            <td>Watched</td>
          </tr>
        </thead>
        <tbody>
          {info.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.filmName}</td>
                <td>
                  <input
                    type={"checkbox"}
                    checked={ele.watched}
                    onChange={(e) => handleCheckBox(e, ele.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(ele.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
