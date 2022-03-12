import React from "react";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log("submit", data); //concise property
    //intellisennse
  };

  const handleColourChange = (e) => {
    setColor(e.target.value);
  };

  console.log("email", email);
  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type={"email"}
          placeholder={"Enter Valid Email"}
          value={email}
          style={{ backgroundColor: "#232A35" }}
          onChange={handleEmailChange}
        />
        <br />
        <br />
        <label>Password : </label>
        <input
          type={"password"}
          placeholder={"Enter Valid Password"}
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <input type={"color"} onChange={handleColourChange} />
        <br />
        <br />
        <input type={"submit"} value={"Login"} />
      </form>
    </div>
  );
};

//signup : email password : encrypt ur passowrd jwt token  : get authentication
//Login : email password  : decrypt = passord
