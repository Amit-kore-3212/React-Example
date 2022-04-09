import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import { Count } from "./Count";
//useEffect hook
//database

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
const Info = (props) => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [watched, setWatched] = useState(false);

  useEffect(() => {
    setInfo(data);
  }, []);

  const handleCheckBoxChange = (id) => {
    const element = info.find((ele) => ele.id == id);
    if (element) {
      element.watched = !element.watched;
      setInfo([...info]);
    }
  };

  const handleDelete = (id) => {
    // setInfo(info.filter((ele) => ele.id !== id));
    const confirm = window.confirm("Are You sure?");
    if (confirm) {
      setInfo(info.filter((ele) => ele.id !== id));
      // const index = info.findIndex((ele) => ele.id == id);
      // info.splice(index, 1);
      // setInfo([...info]);
    }
  };

  const handleFilmNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCheckBoxChanged = (e) => {
    setWatched(e.target.checked);
  };

  const handleAddFilmName = () => {
    const data = {
      id: info.length + 1,
      filmName: name,
      watched,
    };

    setInfo(info.concat(data));
    setName("");
    setWatched(false);
  };

  return (
    <div>
      <h3>FilmNames in table - {props.count}</h3>
      <input placeholder="search" />
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
                    onChange={() => handleCheckBoxChange(ele.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDelete(ele.id)}>delete</button>
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
        placeholder="Enter film Name"
        value={name}
        onChange={handleFilmNameChange}
      />
      <br />
      <br />
      <label>Watched : </label>
      <input
        type={"checkbox"}
        value={watched}
        onChange={handleCheckBoxChanged}
      />
      <br />
      <br />
      <button onClick={handleAddFilmName}>Add Film</button>
      <br />
      <br />
      {/* <button onClick={handleRoute}>Next Page</button> */}
      {/* <button onClick={handleRouteCount}>CountCompo</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Info);

//ul : unOrdereds List
//react life cycle methods
//1 : return will execute
//2: useEffect hook
//redux : global store or global object
