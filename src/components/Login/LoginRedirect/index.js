import React from "react";
import { axiosWithAuth } from "../../../utils";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginRedirect extends React.Component {
  componentDidMount() {
    axiosWithAuth()
      .get(`/api/user/${this.props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return this.props.recs ? <Redirect to="/recommended" /> : <Redirect to="/preferences" />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.user.id,
    recs: state.user.recommendations,
  };
};

export default connect(mapStateToProps, {})(LoginRedirect);
