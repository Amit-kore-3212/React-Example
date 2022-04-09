import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  countAction,
  decrementAction,
  resetAction,
} from "../Actions/countAction";
import "../Style.css";

const Count = (props) => {
  const handleIncrement = () => {
    props.dispatch(countAction());
  };

  const handleDecrement = () => {
    props.dispatch(decrementAction());
  };

  useEffect(() => {

  },[]) // 4REACT // COMPONENTdIDuNM

  const handleReset = () => {
    props.dispatch(resetAction());
  };
  return (
    <div>
      <h3>{props.count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      {/* <ul>
        {props.data.map((ele) => {
          return (
            <li key={ele.id}>
              {ele.name}-{ele.email}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    data: state.data,
  };
};
export default connect(mapStateToProps)(Count);

//dispatch
