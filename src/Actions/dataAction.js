//getData : //setData
//asynchronous operation;thunk : return one more function

import axios from "axios";

export const setData = (payload) => {
  return { type: "BACKEND-DATA", payload: payload };
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginInfo = (payload) => {
  console.log("payload", payload);
};

//asynchronous
//CRUD
