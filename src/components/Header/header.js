import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const StyledHeader = styled.div`
    background: #059033;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
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
  return (
    <StyledHeader>
      <a href="https://med-cabinet-2.netlify.app/">
        <h1>Home</h1>
      </a>
      <Link to="/strains">
        <h1>Strain List</h1>
      </Link>
      <Link to="/recommendations">
        <h1>Recommendations</h1>
      </Link>
      <StyledLogout>Log out</StyledLogout>
    </StyledHeader>
  );
};

export default Header;