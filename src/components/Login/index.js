import React, { useState, useEffect } from "react";
import styled from "styled-components";
import formSchema from "./formSchema";
import * as yup from "yup";
import { axiosWithAuth, setToken } from "../../utils";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { user } from "../../store/actions";

const initialLoginFormValues = {
  name: "",
  password: "",
};

const initialLoginFormErrors = {
  name: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {
  const { push } = useHistory();
  const [formValues, setFormValues] = useState(initialLoginFormValues);
  const [formErrors, setFormErrors] = useState(initialLoginFormErrors);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      username: formValues.name,
      password: formValues.password,
    };
    axiosWithAuth()
      .post("/api/login", loginData)
      .then((res) => {
        /**
         * Set the token, set the ID and username into state
         */
        setToken(res.data.token);
        props.setID(res.data.id);
        push("/redirect")
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          name: "Login failed. Please try again",
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
          <StyledButton className="login" disabled={disabled}>
            Login
          </StyledButton>
        </StyledInput>
      </div>
    </form>
  );
};

export default connect(null, {
  setID: user.setID,
})(Login);

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

const StyledButton = styled.button`
  width: 5rem;
  margin: 0 auto;
  padding: 0.5rem;
`;
