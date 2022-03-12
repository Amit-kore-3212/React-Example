import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { getData } from "../Actions/fetachAction";

const AppHeader = (props) => {
  useEffect(() => {
    props.dispatch(getData());
    console.log("amit");
  }, []);

  return (
    <Box>
      <ul>
        {props.data.map((ele) => (
          <li key={ele.id}>
            {ele.email} - {ele.name}
          </li>
        ))}
      </ul>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(AppHeader);
