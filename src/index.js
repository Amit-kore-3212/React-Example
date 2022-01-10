import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import App from "./App";
// import configureStore from "./Store/configureStore";

// const store = configureStore();

// store.subscribe(() => {
//   console.log("store", store.getState());
// });

// const jsx = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.render(<App />, document.getElementById("root"));

//provider makes the redux store availabel for all the nested componnet
