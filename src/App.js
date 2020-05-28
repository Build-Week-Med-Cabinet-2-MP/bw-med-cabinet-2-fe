import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import LoginRedirect from "./components/Login/LoginRedirect";
import Signup from "./components/Signup";
import PreferenceForm from "./components/PreferenceForm";
import Recommendations from "./components/Recommendations";
import StrainList from "./components/StrainList/";

const StyledApp = styled.div`
  background: #eaf5df;
  min-height: 100vh;
`;

function App(props) {
  return (
    <StyledApp className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/preferences" component={PreferenceForm} />
        <Route path="/recommended" component={Recommendations} />
        <Route path="/strains" component={StrainList} />
        <Route path="/redirect" component={LoginRedirect} />
      </Switch>
    </StyledApp>
  );
}

export default App;
