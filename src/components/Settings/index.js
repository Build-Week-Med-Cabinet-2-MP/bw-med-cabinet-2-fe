import React from "react";
import StyledSettings from "./StyledSettings";
import { connect } from "react-redux";

const Settings = (props) => {
  return (
    <StyledSettings>
      <h1>Settings</h1>
    </StyledSettings>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(Settings);
