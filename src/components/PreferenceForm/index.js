import React from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions";
import styled from "styled-components";
import Location from "./Location";
import Flavor from "./Flavor";
import Effect from "./Effect";
import { flavors, effects } from "../../data";
import Header from "../Header/header.js";

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
        <Header />
        <StyledTitle>
          <h2>Preferences</h2>
        </StyledTitle>
        <form onSubmit={this.submitHandler}>
          <StyledInput>
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
          </StyledInput>
          <div>
            <StyledTitle>
              <h2>Flavors</h2>
              <h3
                style={{ color: this.props.errors.flavors ? "red" : "black" }}
              >
                Choose up to 3:
              </h3>
            </StyledTitle>
            <div>
              <StyledPreference>
                {flavors.map((x, index) => {
                  return (
                    <StyledCheckbox>
                      <Flavor
                        key={index}
                        flavor={x}
                        checked={this.props.flavors.includes(x) ? true : false}
                        checkHandler={this.props.toggleFlavor}
                      />
                    </StyledCheckbox>
                  );
                })}
              </StyledPreference>
            </div>
          </div>
          <div>
            <StyledTitle>
              <h2>Effects</h2>
              <h3
                style={{ color: this.props.errors.effects ? "red" : "black" }}
              >
                Choose up to 3:
              </h3>
            </StyledTitle>
            <StyledPreference>
              {effects.map((x, index) => (
                <StyledCheckbox>
                  <Effect
                    key={index}
                    effect={x}
                    checked={this.props.effects.includes(x) ? true : false}
                    checkHandler={this.props.toggleEffect}
                  />
                </StyledCheckbox>
              ))}
            </StyledPreference>
          </div>
          <StyledInput>
            <input type="submit" value="Submit" />
          </StyledInput>
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

const StyledPreference = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 800px;
`;

const StyledTitle = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StyledInput = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StyledCheckbox = styled.div`
  margin: 0 0.5rem;
  width: 15%;
`;
