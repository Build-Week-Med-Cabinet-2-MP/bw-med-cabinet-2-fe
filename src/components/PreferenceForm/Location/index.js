import React from "react";

const Location = (props) => {
  const { location } = props;
  return (
    <div className="Location">
      {location ? (
        <h1>{location}</h1>
      ) : (
        <h1>a button to allow you to set location</h1>
      )}
    </div>
  );
};

export default Location;
