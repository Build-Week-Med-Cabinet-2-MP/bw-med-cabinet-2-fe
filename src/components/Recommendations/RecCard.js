import React from "react";
import StyledCard from "./StyledCard";
import { img } from "../../data";

const RecCard = (props) => {
  const { name, description, effects, flavors } = props.rec;
  return (
    <StyledCard>
      <h1>{name}</h1>
      <img src={img[Math.floor(Math.random() * 2)]} alt="" />
    </StyledCard>
  );
};
export default RecCard;
