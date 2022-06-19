import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./Assignment/Components/Header";
import { OrderManagement } from "./Assignment/Components/OrderMnagement";
import { Count } from "./Components/Count";
import { FilmName } from "./Components/FillmNames";
import { SignUp } from "./Components/SignUp";
import "./App.css";
import { NewOrder } from "./Assignment/Components/NewOrder";

const data = [
  {
    id: 1,
    name: "3 Idiots",
    watched: true,
  },
  {
    id: 2,
    name: "Bahubali2 ",
    watched: false,
  },
  {
    id: 3,
    name: "Money Heist",
    watched: false,
  },
  {
    id: 4,
    name: "K.G.F",
    watched: true,
  },
];

function App() {
  return (
    <BrowserRouter>
      <div style={{ borderBottom: "1px solid #232a35" }}>
        <HeaderComponent />
      </div>
      <Routes>
        <Route path="/" element={<OrderManagement />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
//in react.js data flows only in one direction : from parent to child
//3 : it should have accept props
//how to update the state from child to parent : event handlers methods
