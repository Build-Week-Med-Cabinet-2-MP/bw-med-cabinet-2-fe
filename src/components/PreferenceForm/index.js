import React from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions";
import Location from "./Location";
import Flavor from "./Flavor";
import Effect from "./Effect";
import { flavors, effects } from "../../data";

class PreferenceForm extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    const effects = this.props.effects.join(", ");
    const flavors = this.props.flavors.join(", ");
    const prefs = { effects, flavors, id: this.props.id };
    /**
     * FIGURE OUT HOW HE WANTS THE DATA STRUCTURED FOR THE POST
     */
    // this.props.setPrefs(prefs).then(() => {
    // });
    this.props.setPrefs(prefs);
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
  const p = state.signup;
  return {
    location: p.location,
    permission: p.locationAccessAllowed,
    flavors: p.flavors,
    effects: p.effects,
    errors: p.errors,
    id: state.user.id,
  };
};

export default connect(mapStateToProps, {
  toggleLocationPermission: signup.toggleLocationPermission,
  toggleFlavor: signup.toggleFlavor,
  toggleEffect: signup.toggleEffect,
  setPrefs: signup.setPrefs,
})(PreferenceForm);
