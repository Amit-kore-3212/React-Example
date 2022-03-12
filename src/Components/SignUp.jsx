import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const [check, setCheck] = useState(false);
  const [err, setErr] = useState("");
  const naviagte = useNavigate();

  const ref = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //unneceessary
    if (email.length < 5) {
      setErr("It should have atleast 5 charcaters");
      ref.current.focus();
      console.log("ref", ref);
    }
    const data = {
      email,
      password,
    };

    console.log("clicked signUp", data);
  };
  //alt+shift+f
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleCheckBox = (e) => {
    console.log(e.target.checked);
    setCheck(!check);
  };

  const handleClick = () => {
    naviagte("/info");
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <label>Email : </label>
        <input
          type={"text"}
          style={{ backgroundColor: color }}
          placeholder={"Enter Valid Email"}
          value={email}
          style={{ width: "200px", height: "50px" }}
          ref={ref}
          onChange={handleEmailChange}
        />
        <h4 style={{ color: "red" }}>{err && err}</h4>
        <br />
        <br />
        <label>Password :</label>
        <input
          type={"password"}
          placeholder={"Enter Valid Password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <input type={"submit"} value={"SignUp"} />
        <br />
        <br />
        <input type={"date"} onChange={handleColorChange} />
        <br />
        <br />
        <input type={"checkbox"} checked={check} onChange={handleCheckBox} />
        <br />
        <br />
        <button onClick={handleClick}>Next</button>
      </form>
    </div>
  );
};

//text email , password , submit , date, file , color , number, checkbox
