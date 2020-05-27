import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import StyledList from "./StyledList";
import StrainCard from "./StrainCard";

import { strains } from "../../store/actions";

const StrainList = (props) => {
  /**
   * props: {strainList, isFetching}
   */
  const { isFetching, strainList, fetchStrains } = props;
  useEffect(() => {
    fetchStrains();
  }, []);
  return (
    <StyledList>
      <h1>Strain List</h1>
      <div>
        {isFetching ? (
          "loading..."
        ) : (
          <>
            {strainList.map((strain) => {
              return <StrainCard strain={strain} />;
            })}
          </>
        )}
      </div>
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    strainList: state.strains.strains,
    isFetching: state.strains.isFetching,
  };
};

export default connect(mapStateToProps, {
  fetchStrains: strains.fetchStrains,
})(StrainList);
