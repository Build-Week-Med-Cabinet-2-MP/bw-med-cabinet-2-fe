import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import StyledList from "./StyledList";
import StrainCard from "./StrainCard";
import Header from "../Header/header.js";

import { strains } from "../../store/actions";

const StrainList = (props) => {
  /**
   * props: {strainList, isFetching}
   */
  const { isFetching, strainList, fetchStrains } = props;
  useEffect(() => {
    if (!strainList) fetchStrains();
  }, []);
  return (
    <StyledList>
      <Header />
      <div>
        {isFetching ? (
          "loading..."
        ) : (
          <>
            {strainList &&
              strainList.map((strain) => {
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
