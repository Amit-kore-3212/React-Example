import React from "react";
import Count from "./Components/Count";
import Info from "./Components/Info";
import { SignUp } from "./Components/SignUp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Request } from "./Components/RequestToBackEnd";
import { Post } from "./Components/Post";
import { Login } from "./Components/Login";
import "./App.css";
import AppHeader from "./Components/AppHeader";

function App(props) {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SignUp />} />
    //     <Route path="/info" element={<Info />} />
    //     <Route path="/count" element={<Count />} />
    //     <Route path="/request" element={<Request />} />
    //     <Route path="/request/:id" element={<Post />} />
    //     <Route path="/appHeader" element={<AppHeader />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Count />
      <Info /> */}
      {/* <AppHeader /> */}
      {/* <WithBackEnd /> */}
      <h3>Amit</h3>
    </div>
  );
}

export default App;

// callback functn: a function which is being passed as an argument to another funct
//HOC : its a component which accepts component/function as an argument and returns  another function/component
//enhanced components :  whatver you are returning from the hoc its called as enhanced components

// function add(m) {
//   return function (n) {
//     return m + n;
//   };
// }
// console.log(add(7)(8));

// export default connect(mapStateToProps)(Count);
