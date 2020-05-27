import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Popup from "./components/Popup";
import PreferenceForm from "./components/PreferenceForm";
import Recommendations from "./components/Recommendations";
import StrainList from "./components/StrainList/";

const StyledApp = styled.div`
  padding: 150px;
`;

function App(props) {
  const { isPopped } = props;
  return (
    <StyledApp className="App">
      {isPopped && <Popup />}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/preferences" component={PreferenceForm} />
        <Route path="/recommended" component={Recommendations} />
        <Route path="/strains" component={StrainList} />
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
