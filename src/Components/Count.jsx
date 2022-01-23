import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(["amit"]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Count - {count}</h3>
      <h3>Name - {name.designation}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Count;
//react hooks : useState , useEffect , useREf
//useSatte : it allows us to have state variable in a function component
