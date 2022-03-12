import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

//CRUD : create read upadte delete
//  : post get update delete
//Rest API's
//mutations and querys : create and update , delete , get

export const Request = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("data", data);
  return (
    <div>
      <h3>Request</h3>
      <ul>
        {data.map((ele) => (
          <li key={ele.id}>
            <Link to={`/request/${ele.id}`}>{ele.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

//npm install axios
