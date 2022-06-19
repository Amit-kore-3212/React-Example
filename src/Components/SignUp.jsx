import React from "react";
import { useState } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //it prevents unnecessary refresh of the page

    const data = {
      email: email,
      password: password,
    };
    console.log("e", data);
  };

  const handleBlur = () => {
    if (!email.includes("@")) {
      setError("Enter valid email");
    }
    console.log("called");
  };

  const handleChange = (e) => {
    console.log("e", e.target.checked);
    setChecked(e.target.checked);
  };

  const handleGenderChange = (e) => {
    console.log("gender", e.target.value);
  };

  const handleSelect = (e) => {
    console.log("select", e.target.value);
  };
  return (
    <div>
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          id={"email"}
          type={"text"}
          placeholder={"Enter Valid Email"}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleBlur}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          type={"password"}
          placeholder={"Enter Valid password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <br />
        <input type={"submit"} value={"Signup"} />
        <br />
        <br />
        <input type={"checkbox"} checked={checked} onChange={handleChange} />
        <br />
        <br />
        <input type={"radio"} name="gender" onChange={handleGenderChange} />
        Male
        <input type={"radio"} name="gender" /> Female
        <br />
        <br />
        <select onChange={handleSelect}>
          <option>{"select"}</option>
          <option value={"Amit"}>{"amit"}</option>
          <option value={"Prathima"}>{"prathima"}</option>
          <option value={"Manasa"}>{"manasa"}</option>
          <option>{"Jyothi"}</option>
        </select>
      </form>
    </div>
  );
};

//text, password , submit , email, number , color , date, datetime-local,file, checkbox , radio
