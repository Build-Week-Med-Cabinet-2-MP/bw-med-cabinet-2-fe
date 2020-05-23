import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledApp = styled.div``;

function App(props) {
  return (
    <StyledApp className="App">
      <h1>Med Cabinet</h1>
      <p>
        {props.name}, {props.age} years old
      </p>
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
