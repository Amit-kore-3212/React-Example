import React, { useEffect, useState } from "react";

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

export const Wrapper = () => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [watched, setWatched] = useState(false);

  const handleCheckBoxChange = (e) => {
    setWatched(e.target.checked);
  };

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleFilmNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddFilm = () => {
    const data = {
      id: info.length + 1,
      filmName: name,
      watched: watched,
    };
    setInfo([...info, data]);
    setName("");
    setWatched(false);
  };

  return (
    <div>
      <h3>FilmNames in table</h3>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>FilmName</td>
            <td>Watched</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {info.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.filmName}</td>
                <td>
                  <input type={"checkbox"} checked={ele.watched} />
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
        placeholder="Enter Film Name"
        value={name}
        onChange={handleFilmNameChange}
      />
      <br />
      <br />
      <label>Watched : </label>
      <input
        type={"checkbox"}
        checked={watched}
        onChange={handleCheckBoxChange}
      />
      <br />
      <br />
      <button onClick={handleAddFilm}> Add Film</button>
    </div>
  );
};
