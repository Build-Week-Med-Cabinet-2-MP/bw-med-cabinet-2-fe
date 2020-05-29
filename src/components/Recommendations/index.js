import React, { useEffect } from "react";
import { connect } from "react-redux";
import Visualization from "../Visualization";
import { strains, visual } from "../../store/actions";

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
    if (strainList) getRecData();
  }, [strainList, fetchStrains]);

  return (
    <div>
      {isFetching && <h2>Loading...</h2>}
      {fullRecObj
        ? fullRecObj.map((x) => {
            return (
              <div>
                <h2>{x.name}</h2>
              </div>
            );
          })
        : !isFetching && <div>No strains to display</div>}
      {fullRecObj && <Visualization strain={fullRecObj[curIndex]} />}
    </div>
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
