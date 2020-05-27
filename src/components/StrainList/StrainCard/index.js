import React from "react";
import StyledCard from "./StyledCard";

const StrainCard = (props) => {
  const { name, description, flavors, effects } = props.strain;
  return (
    <StyledCard>
      <h2>{name}</h2>
    </StyledCard>
  );
};

export default StrainCard;
