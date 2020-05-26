import React, { useState, useEffect, useParams } from "react";
import styled from "styled-components";
import formSchema from "./formSchema";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const initialLoginFormValues = {
  name: "",
  password: "",
};

const initialLoginFormErrors = {
  name: "",
  password: "",
};

const Login = (props) => {
  const { disabled, errors } = props;

  const [formValues, setFormValues] = useState(initialLoginFormValues);
  const [formErrors, setFormErrors] = useState(initialLoginFormErrors);

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

  const postLoginData = (loginData) => {
    axios
      .post("", loginData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      })
      .finally(() => {
        setFormValues(initialLoginFormValues);
        console.log(loginData);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userLogin = { ...formValues };
    postLoginData(userLogin);
  };

  return (
    <div>
      <StyledLogin>
        <Link to="/signup">
          <h1>Signup</h1>
        </Link>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
      </StyledLogin>

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

        <button className="login">Login</button>
      </StyledInput>
    </div>
  );
};

export default Login;

const StyledLogin = styled.div`
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
