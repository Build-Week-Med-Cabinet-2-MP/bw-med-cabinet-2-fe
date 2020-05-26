import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Popup from "./components/Popup";

const StyledApp = styled.div``;

function App(props) {
  const { isPopped } = props;
  return (
    <StyledApp className="App">
      {isPopped && <Popup />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
      </Switch>
    </StyledApp>
  );
}

const mapStateToProps = (state) => {
  return {
    isPopped: state.popup.isPopped,
  };
};

export default connect(mapStateToProps, {})(App);
