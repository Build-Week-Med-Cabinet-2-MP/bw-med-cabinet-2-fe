import React from "react";
import StyledSplash from "./StyledSplash";
import Visualization from "../Visualization";
import { img } from "../../data";

const RecSplash = (props) => {
  const { name, description, effects, flavors } = props.rec;
  return (
    <StyledSplash>
      <div className="left">
        <h1>{name}</h1>
        <div className="banner">
          <img src={img[Math.floor(Math.random() * 2)]} alt="" />
          <p>{description}</p>
        </div>
        <div className="lists">
          <ul>
            <lh>Effects:</lh>
            {effects.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
          <ul>
            <lh>Flavors:</lh>
            {flavors.map((x, index) => (
              <li key={index}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <Visualization effects={effects} flavors={flavors} />
      </div>
    </StyledSplash>
  );
};

export default RecSplash;
