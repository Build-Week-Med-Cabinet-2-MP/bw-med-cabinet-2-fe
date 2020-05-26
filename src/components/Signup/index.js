import React, { useState, useEffect, useParams } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import formSchema from "./formSchema";
import * as yup from "yup";
import axios from "axios";

const initialSignupFormValues = {
  name: "",
  password: "",
  email: "",
};

const initialSignupFormErrors = {
  name: "",
  password: "",
};

const Signup = (props) => {
  const [formValues, setFormValues] = useState(initialSignupFormValues);
  const [formErrors, setFormErrors] = useState(initialSignupFormErrors);

  const onInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const postLoginData = (signupData) => {
    axios
      .post("", signupData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      })
      .finally(() => {
        setFormValues(initialSignupFormValues);
        console.log(signupData);
      });

    const onSubmit = (event) => {
      event.preventDefault();
      const userLogin = { ...formValues };
      postLoginData(userLogin);
    };
  };

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

      <div className="errors">
        <div>{formErrors.name}</div>
        <div>{formErrors.password}</div>
      </div>

      <StyledInput>
        <label>
          Username:
          <input
            type="text"
            placeholder="Enter Your Username"
            minLength="8"
            name="name"
            value={formValues.name}
            onChange={onInputChange}
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
            value={formValues.password}
            onChange={onInputChange}
          />
        </label>
        <button className="signup">Signup</button>
      </StyledInput>
    </div>
  );
};

export default Signup;

const StyledSignup = styled.div`
  background: #355a20;
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;

const StyledInput = styled.div`
  background: #eaf5df;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
