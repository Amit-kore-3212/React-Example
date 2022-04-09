import React, { useState } from "react";
import { connect } from "react-redux";
import { loginInfo } from "../Actions/dataAction";
// import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [states, setStates] = useState(["amit", "bhoomi", "manasa", "jyothi"]);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents unnecessary refreshing of the page
    props.dispatch(loginInfo({ email: email }));
    //concise method
  };

  const handleColorChange = (e) => {
    console.log("checked", e.target.value);
    // setColor(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value, "amit");
  };
  const handlePassword = (e) => {
    props.passwordChange(e);
  };

  // const handleRoute = () => {
  //   navigate("/");
  // };

  return (
    <div>
      <h3>SignUp -{props.count}</h3>
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          type={"text"}
          placeholder={"Enter Valid Email"}
          value={props.email}
          onChange={handleEmailChange}
        />
        <br />
        <br />
        <label>Password: </label>
        <input
          type={"password"}
          placeholder={"Enetr valid Password"}
          onChange={handlePassword}
          value={props.password}
        />
        <br />
        <br />
        <input type={"submit"} value={"SignUp"} />
        <br />
        <br />
        <select onChange={handleChange}>
          {states.map((ele) => {
            return <option value={ele}>{ele}</option>;
          })}
        </select>
      </form>
      <br />
      <br />
      {/* <button onClick={handleRoute}>Prev Page</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(Login);

//text , password, email , number , color , date, datetime-local ,checkbox , textarea
