import React from "react";
import { connect } from "react-redux";
import { preferences } from "../../store/actions";
import Location from "./Location";
import Flavor from "./Flavor";
import Effect from "./Effect";
import { flavors, effects } from "../../data";

class PreferenceForm extends React.Component {
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.permission !== this.props.permission) {
      if (this.props.permission) {
        //User has just accepted location permission
      } else {
        //User has revoked location permissions
      }
    }
  }
  componentWillUnmount() {}
  render() {
    return (
      <div>
        <h2>Preferences</h2>
        <form>
          <div>
            <label>
              <input
                type="checkbox"
                name="locationAccess"
                checked={this.props.permission}
                onChange={this.props.toggleLocationPermission}
              />
              &nbsp;I would like MedCabinet to use my location to recommend
              nearby dispensaries
            </label>
            {this.props.permission && (
              <Location location={this.props.location} />
            )}
          </div>
          <div>
            <h2>Flavors</h2>
            <h3>Choose up to 3:</h3>
            <div>
              {flavors.map((x) => {
                return <Flavor flavor={x} />;
              })}
            </div>
          </div>
          <div>
            <h2>Effects</h2>
            <h3>Choose up to 3:</h3>
            {effects.map((x) => (
              <Effect effect={x} />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.preferences.location,
    permission: state.preferences.locationAccessAllowed,
  };
};

export default connect(mapStateToProps, {
  toggleLocationPermission: preferences.toggleLocationPermission,
})(PreferenceForm);
