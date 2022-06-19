import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Count = (props) => {
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button>Reset</button>
      <br />
      <br />
      <input />
    </div>
  );
};

//how the cycle
//react js : virtual DOM nature
//DOM : Document Object Module
