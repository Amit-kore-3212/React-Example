import React, { useState } from "react";
import Count from "./New-Components/Count";
import Info from "./New-Components/Information";
import Login from "./New-Components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Wrapper } from "./New-Components/Wrapper";
import RequestToBackEnd from "./New-Components/RequestToBackEnd";
import { Post } from "./New-Components/Post";
import { DeleteOperation } from "./New-Components/DeleteOperation";
import "./Style.css";
import { HomePage } from "./New-Components/HomePage";
import { Tasks } from "./New-Components/Tasks";
import { ClassComponent } from "./New-Components/ClassComponent";

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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/count" element={<Count />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wrapper" element={<Wrapper />} />
          <Route path="/request" element={<RequestToBackEnd />} />
          <Route path="/request/:id" element={<Post />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/class" element={<ClassComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

//callBackFunction : a function which is being passed as an argument to another function
//Higher Order Components : a component which accepts component as an argument and returns component as a value
