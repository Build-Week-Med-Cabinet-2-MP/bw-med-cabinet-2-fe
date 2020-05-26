import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const StyledSignup = styled.div`
  background: #355a20;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;

const StyledInput = styled.div`
  background: #eaf5df;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Signup = (props) => {
  return (
    <div>
      <StyledSignup>
        <Route path="/signup">
          <Link to="/signup">
            <h1>Signup</h1>
          </Link>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </Route>
      </StyledSignup>

      <StyledInput>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter Your Username"
            minLength="8"
            name="name"
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            placeholder="Enter Your Email"
            minLength="6"
            name="email"
          />
        </label>

        <label>
          Password:
          <input
            type="text"
            placeholder="Enter Your Password"
            minLength="6"
            name="password"
          />
        </label>
      </StyledInput>
    </div>
  );
};

export default Signup;
