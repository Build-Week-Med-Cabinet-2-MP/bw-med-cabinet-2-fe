import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import formSchema from "./formSchema";
import * as yup from "yup";
import { axiosWithAuth } from "../../utils";

const initialSignupFormValues = {
  name: "",
  password: "",
  email: "",
};

const initialSignupFormErrors = {
  name: "",
  password: "",
};

const initialDisabled = true;

const Signup = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialSignupFormValues);
  const [formErrors, setFormErrors] = useState(initialSignupFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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

  const onSubmit = (event) => {
    event.preventDefault();
    const signupData = {
      email: formValues.email,
      password: formValues.password,
      username: formValues.name,
    };
    axiosWithAuth()
      .post("/api/register", signupData)
      .then((res) => {
        console.log(res);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
        setFormErrors({
          ...formErrors,
          name: "Signup failed. Please try again.",
        });
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      console.log(valid);
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <StyledSignup>
          <Link to="/signup">
            <h1>Signup</h1>
          </Link>
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
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
              value={formValues.email}
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
          <StyledButton className="signup" disabled={disabled}>
            Sign Up
          </StyledButton>
        </StyledInput>
      </div>
    </form>
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

const StyledButton = styled.button`
  width: 5rem;
  margin: 0 auto;
  padding: 0.5rem;
`;
