import React from "react";
import StyledCard from "./StyledCard";

const StrainCard = (props) => {
  const { name, description, flavors, effects } = props.strain;
  return (
    <StyledCard>
      <h2 className="name">Name: {name}</h2>
      <h3 className="flavors">Flavors: {flavors}</h3>
      <h3 className="effects">Effects: {effects}</h3>
      <h4 className="desc">{description}</h4>
    </StyledCard>
  );
};

export default StrainCard;
