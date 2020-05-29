import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Route, useHistory } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import LoginRedirect from "./components/Login/LoginRedirect";
import Signup from "./components/Signup";
import PreferenceForm from "./components/PreferenceForm";
import Recommendations from "./components/Recommendations";
import StrainList from "./components/StrainList/";
import Settings from "./components/Settings";
import { settings } from "./store/actions";
import { connect } from "react-redux";

const StyledApp = styled.div`
  background: #eaf5df;
  min-height: 100vh;
`;

function App(props) {
  const { push } = useHistory();
  useEffect(() => {
    if (!props.id) {
      props.logout();
      push("/");
    }
  }, []);
  return (
    <StyledApp className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/preferences" component={PreferenceForm} />
        <PrivateRoute path="/recommended" component={Recommendations} />
        <PrivateRoute path="/strains" component={StrainList} />
        <PrivateRoute path="/redirect" component={LoginRedirect} />
        <PrivateRoute path="/settings" component={Settings} />
      </Switch>
    </StyledApp>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.user.id,
  };
};

export default connect(mapStateToProps, {
  logout: settings.signOut,
})(App);
