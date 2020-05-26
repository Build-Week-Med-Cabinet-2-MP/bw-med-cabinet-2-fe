import React from "react";

const Flavor = (props) => {
  const { flavor } = props;
  return (
    <div className="Flavor">
      <label>
        <input type="checkbox" />
        &nbsp;{flavor}
      </label>
    </div>
  );
};

export default Flavor;
