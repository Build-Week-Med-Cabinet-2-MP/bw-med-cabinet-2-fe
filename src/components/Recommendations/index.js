import React, { useEffect } from "react";
import { connect } from "react-redux";
import { rec } from "../../store/actions";

const Recommendations = (props) => {
  const { test, isFetching, fetchRec } = props;
  useEffect(() => {
    fetchRec();
  }, []);
  return (
    <div>
      {isFetching 
        ? <h2>Loading...</h2>
        : <h2>{test}</h2>
        }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    test: state.rec.test,
    isFetching: state.rec.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchRec: rec.fetchRec,
})(Recommendations);
