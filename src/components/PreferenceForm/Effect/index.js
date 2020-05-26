import React from "react";

const Effect = (props) => {
  const { effect } = props;
  return (
    <div className="Effect">
      <label>
        <input type="checkbox" />
        &nbsp;{effect}
      </label>
    </div>
  );
};

export default Effect;
