import React from "react";
import { connect } from "react-redux";
import { preferences } from "../../store/actions";
import Location from "./Location";
import Flavor from "./Flavor";
import Effect from "./Effect";
import { flavors, effects } from "../../data";
import { submitPrefs } from "../../store/actions/preferencesActions";

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

  submitHandler = (e) => {
    e.preventDefault();
    const { permission, location, effects, flavors } = this.props;
    const prefs = { permission, location, effects, flavors };
    this.props.submitPrefs(prefs);
    this.props.history.push("/recommended");
  };

  render() {
    return (
      <div>
        <h2>Preferences</h2>
        <form onSubmit={this.submitHandler}>
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
            <h3 style={{ color: this.props.errors.flavors ? "red" : "black" }}>
              Choose up to 3:
            </h3>
            <div>
              {flavors.map((x, index) => {
                return (
                  <Flavor
                    key={index}
                    flavor={x}
                    checked={this.props.flavors.includes(x) ? true : false}
                    checkHandler={this.props.toggleFlavor}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2>Effects</h2>
            <h3 style={{ color: this.props.errors.effects ? "red" : "black" }}>
              Choose up to 3:
            </h3>
            {effects.map((x, index) => (
              <Effect
                key={index}
                effect={x}
                checked={this.props.effects.includes(x) ? true : false}
                checkHandler={this.props.toggleEffect}
              />
            ))}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const p = state.preferences;
  return {
    location: p.location,
    permission: p.locationAccessAllowed,
    flavors: p.flavors,
    effects: p.effects,
    errors: p.errors,
  };
};

export default connect(mapStateToProps, {
  toggleLocationPermission: preferences.toggleLocationPermission,
  toggleFlavor: preferences.toggleFlavor,
  toggleEffect: preferences.toggleEffect,
  submitPrefs: preferences.submitPrefs,
})(PreferenceForm);
