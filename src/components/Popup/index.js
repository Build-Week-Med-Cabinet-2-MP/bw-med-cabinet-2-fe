import React from "react";
import { connect } from "react-redux";
import { popup } from "../../store/actions/";

const Popup = (props) => {
  const { data, close } = props;
  return (
    <div>
      <h2>Hi {data.name}</h2>
      <span className="close" onClick={close}>
        &times;
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // data: state.strains.strains[state.popup.index],
    data: { name: "mahalo" },
  };
};

export default connect(mapStateToProps, {
  close: popup.closePopup,
})(Popup);
