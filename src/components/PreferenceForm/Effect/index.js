import React from "react";

const Effect = (props) => {
  const { effect, checked, checkHandler } = props;
  return (
    <div className="Effect">
      <label>
        <input
          type="checkbox"
          name={effect}
          checked={checked}
          onChange={checkHandler}
        />
        &nbsp;{effect}
      </label>
    </div>
  );
};

export default Effect;
