import React from "react";

const Flavor = (props) => {
  const { flavor, checked, checkHandler } = props;
  return (
    <div className="Flavor">
      <label>
        <input
          type="checkbox"
          name={flavor}
          checked={checked}
          onChange={checkHandler}
        />
        &nbsp;{flavor}
      </label>
    </div>
  );
};

export default Flavor;
