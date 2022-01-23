import React, { useState } from "react";
import "../App.css";

export const Counted = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="div">
      <div className="space">
        <button className="button">Increment</button>
      </div>
      <div>
        <button className="button1">Decrement</button>
      </div>
      <div className="space1">
        <button className="button">Reset</button>
      </div>
    </div>
  );
};
