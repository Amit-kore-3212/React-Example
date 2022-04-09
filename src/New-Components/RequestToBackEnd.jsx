import { getThemeProps } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getData } from "../Actions/dataAction";
// import { Link } from "react-router-dom";
//object to get the data from the web server
const RequestToBackEnd = (props) => {
  useEffect(() => {
    props.dispatch(getData());
  }, []);

  return (
    <div>
      <ul>
        {props.datas.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name}-{ele.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.data,
  };
};

export default connect(mapStateToProps)(RequestToBackEnd);

//CRUD : Create Read Delete and update
//Post , Get , delete , put
//promise: asynchrnous
//promise : reject success
//json : javascript object notation
//axios
//Rest API's
//graphql
//Rest API's   graphql muatation and query mutation : create and update amnd delete ; changes in the db its called as mutation : //query : get :getById
