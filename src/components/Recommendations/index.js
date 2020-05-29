import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import RecCard from "./RecCard";
import StyledList from "./StyledList";
import { strains, visual } from "../../store/actions";
import RecSplash from "./RecSplash";

const Recommendations = (props) => {
  const {
    isFetching,
    recs,
    curIndex,
    strainList,
    fullRecObj,
    fetchStrains,
    setFullRec,
  } = props;

  const getRecData = () => {
    console.log(recs);
    const names = recs.split(", ");
    setFullRec(strainList.filter((x) => names.includes(x.name)));
  };

  useEffect(() => {
    if (!strainList) fetchStrains();
    if (strainList && recs) getRecData();
  }, [strainList, recs, fetchStrains]);

  return (
    <StyledList>
      <Header />
      {isFetching && <h2 className="loading">Loading...</h2>}
      <div className="container">
        {fullRecObj
          ? fullRecObj.map((x, index) => {
              return <RecCard key={index} rec={x} />;
            })
          : !isFetching && (
              <div>
                No strains to display. <Link to="/preferences">Click Here</Link>{" "}
                to set preferences
              </div>
            )}
      </div>
      {fullRecObj && <RecSplash rec={fullRecObj[curIndex]} />}
    </StyledList>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.signup.isFetching,
    recs: state.user.recommendations,
    curIndex: state.visual.curRec,
    strainList: state.strains.strains,
    fullRecObj: state.visual.fullRecObj,
  };
};

export default connect(mapStateToProps, {
  fetchStrains: strains.fetchStrains,
  setFullRec: visual.setFullRec,
})(Recommendations);
