import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
//useEffect
//how to update the state from child to parent
//data flows in one direction : parent to child
//can we update the state from child to parent? yes : by using event handlers

const data = [
  {
    id: 1,
    filmName: "Spider Man",
    watched: true,
  },
  {
    id: 2,
    filmName: "3 Idiots",
    watched: false,
  },
  {
    id: 3,
    filmName: "Money Heist",
    watched: true,
  },
  {
    id: 4,
    filmName: "Dangal",
    watched: false,
  },
];

const Info = (props) => {
  const [info, setInfo] = useState([]);
  const [name, setName] = useState({ filmName: "", watched: false });
  const [err, setErr] = useState("");
  //localStorage

  useEffect(() => {
    setInfo(data);
  }, []);

  const validateOnBlur = () => {
    if (name.filmName.length == 0) {
      setErr("Enter valid name");
    } else {
      setErr("");
    }
  };

  const handleCheckBox = (id) => {
    const findComp = info.find((ele) => ele.id == id);

    if (findComp) {
      findComp.watched = !findComp.watched;
      setInfo([...info]);
    }
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You sure?");
    if (confirm) {
      const index = info.findIndex((ele) => ele.id == id);
      info.splice(index, 1);
      setInfo([...info]);
    }
  };

  return (
    <div className="tableConatiner">
      <div>
        <h3>FilmNames In Table Format</h3>
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <td>id</td>
              <td>FilmName</td>
              <td>Watched</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {info.map((ele, index) => {
              return (
                <tr key={ele.id + index}>
                  <td>{index + 1}</td>
                  <td>{ele.filmName}</td>
                  <td>
                    <input
                      type={"checkbox"}
                      checked={ele.watched}
                      onChange={() => handleCheckBox(ele.id)}
                    />
                  </td>
                  <td>{props.count}</td>
                  <td>Description</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <button>Show More</button>
        <button>Hide Data</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Info);
