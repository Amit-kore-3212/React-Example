import React from "react";
import "./App.css";
import { AppHeader } from "./Components/AppHeader";
import Count from "./Components/Count";

const data = [
  {
    id: 1,
    filmName: "3 Idiots",
    watched: true,
  },
  {
    id: 2,
    filmName: "Spider Man",
    watched: false,
  },
  {
    id: 3,
    filmName: "Dangal",
    watched: true,
  },
  {
    id: 4,
    filmName: "MoneyHeist",
    watched: true,
  },
];

function App() {
  return (
    // <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
    //   <div style={{ border: "1px solid #000000", height: "40px" }}>
    //     <AppHeader />
    //   </div>
    //   <div style={{ paddingTop: "10px" }}>
    //     <Count />
    //   </div>
    // </div>
    <div>
      <Count />
    </div>
  );
}

export default App;
