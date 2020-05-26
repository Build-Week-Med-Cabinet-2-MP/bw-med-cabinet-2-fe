import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const StyledApp = styled.div``;

function App(props) {
  return (
    <StyledApp className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </StyledApp>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.test.name,
    age: state.test.age,
  };
};

export default connect(mapStateToProps, {})(App);
