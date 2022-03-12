import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../Actions/count";

//useState : we can store data locally
const Count = (props) => {
  const handleIncrement = () => {
    props.dispatch(incrementAction());
  };

  const handleDecrement = () => {
    props.dispatch(decrementAction());
  };

  const handleReset = () => {
    props.dispatch(resetAction());
  };

  return (
    <div className="container">
      <div className="buttonContainer">
        <div>
          <button className="button" onClick={handleIncrement}>
            Increment
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <button className="button" onClick={handleDecrement}>
              Decrement
            </button>
          </div>
          <div style={{ paddingLeft: "10px" }}>{props.count}</div>
        </div>
        <div>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(Count);
//redux mobx relay's
//redux is a global object
