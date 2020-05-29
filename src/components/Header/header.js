import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { settings } from "../../store/actions";

const Header = (props) => {
  const { signOut } = props;
  const StyledHeader = styled.div`
    background: #059033;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    .active {
      color: white;
    }
  `;

  const StyledLogout = styled.button`
    background: #059033;
    font-size: 1.3rem;
    font-weight: 700;
    border: 2px solid black;
    border-radius: 5px;
    padding: 0.2rem;

    &:hover {
      background: black;
      color: #059033;
    }
  `;

  const logoutHandler = (e) => {
    e.preventDefault();
    signOut();
    window.location.reload();
  };

  return (
    <StyledHeader>
      <NavLink to="/strains">
        <h1>Strain List</h1>
      </NavLink>
      <NavLink to="/recommended">
        <h1>Recommendations</h1>
      </NavLink>
      <NavLink to="/settings">
        <h1>Settings</h1>
      </NavLink>
      <StyledLogout onClick={logoutHandler}>Log out</StyledLogout>
    </StyledHeader>
  );
};

export default connect(null, {
  signOut: settings.signOut,
})(Header);
