//jsx means javascript XML: it enables us to use html inside an react
//1 : component name should start with capital letter
//2: it should return jsx : Javscript XML
//useEffect : hook it will be called depend upon dependencies
//flow of react:
//virtual DOM : document object Module

import React, { useState, useEffect } from "react";
//useState : local state
//setCount
function Count() {
  const [name, setName] = useState("amit"); //tima

  const handleClick = () => {
    setName("amit");
  };

  useEffect(() => {
    setName("srini");
    console.log("This is an useEefect");
  }, []);

  return (
    <div>
      <h3>Reversed Name -{name}</h3>

      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default Count;
//div acts as a container
//class based components
//function based components
//React hooks
//useState , useEffect , useRef
