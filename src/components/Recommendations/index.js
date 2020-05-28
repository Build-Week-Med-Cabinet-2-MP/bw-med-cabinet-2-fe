import React, { useEffect } from "react";
import { connect } from "react-redux";

const Recommendations = (props) => {
  const { isFetching, recs } = props;
  return (
    <div>
      {isFetching && <h2>Loading...</h2>}
      {recs
        ? recs.map((x) => {
            return (
              <div>
                <h2>{x.name}</h2>
              </div>
            );
          })
        : "No strains to display"}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.signup.isFetching,
    recs: state.user.recommendations,
  };
};

export default connect(mapStateToProps, {})(Recommendations);
