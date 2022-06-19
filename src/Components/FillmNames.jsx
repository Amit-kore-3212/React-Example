import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Count } from "./Count";
//useEffect

class Info {
  id = "";
  name = "";
  watched = false;
  constructor() {
    this.id = 5;
    this.name = "";
    this.watched = false;
  }
}
export const FilmName = (props) => {
  const [info, setInfo] = useState([]);
  const [filmInfo, setFilmInfo] = useState(new Info());

  useEffect(() => {
    setInfo(props.filmData);
  }, []);

  const handleFilmName = (e) => {
    console.log("noothing");
  };

  const handleFieldUpdate = (key, value) => {
    setFilmInfo({ ...filmInfo, [key]: value });
  };

  const handleAddFim = () => {
    setInfo([...info, filmInfo]);
  };
  return (
    <div>
      <h3>FilmNames: {info.length}</h3>
      <h3>Name : {props.person}</h3>
      <h3>
        <input placeholder="search" />
      </h3>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Watched</th>
          </tr>
        </thead>
        <tbody>
          {info.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>
                  <input
                    type={"checkbox"}
                    checked={ele.watched}
                    onChange={handleFilmName}
                  />
                </td>
                <td>
                  <button>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <label>FilmName : </label>
      <input
        value={filmInfo.name}
        onChange={(e) => handleFieldUpdate("name", e.target.value)}
      />
      <br />
      <br />
      <label>Watched : </label>
      <input
        type={"checkbox"}
        checked={filmInfo.watched}
        onChange={(e) => handleFieldUpdate("watched", e.target.checked)}
      />
      <br />
      <br />
      <button onClick={handleAddFim}>Add Film</button>
    </div>
  );
};
//row : headers : id name watched thead , tbody
