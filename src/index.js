import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./Store/store";

const store = configureStore();

store.subscribe(() => {
  console.log("store", store.getState()); // whenever the state
});

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
//actions are nothing but functions which has the information what needs to be with the store
//type : what needs to be done to the store
//reducers these are again functions which accepts previous state and an action logic happens it returns a new State
//input return dispatch   output
//provider makes available store for all the components

//reducers are functions which accepts 2 parameters previous state , action
