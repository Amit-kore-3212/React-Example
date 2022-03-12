import axios from "axios";

export const setData = (payload) => {
  return { type: "FETCHDATA", payload: payload };
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
//thunk helps us to make an asynchronous operations
