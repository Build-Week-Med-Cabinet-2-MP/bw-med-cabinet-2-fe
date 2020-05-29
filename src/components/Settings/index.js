import React, { useEffect } from "react";
import StyledSettings from "./StyledSettings";
import Header from "../Header/header";
import { connect } from "react-redux";
import { settings } from "../../store/actions";

const Settings = (props) => {
  const {
    id,
    userData,
    fieldValues,
    updated,
    isDeleted,
    updateInfo,
    fillFields,
    handleSettingsInput,
    setUpdated,
    deleteProfile,
  } = props;

  if (isDeleted) {
    window.location.reload();
  }
  const submitHandler = (e) => {
    e.preventDefault();
    updateInfo({ id, req: fieldValues });
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    deleteProfile(id);
  };

  useEffect(() => {
    fillFields(userData);
    return () => {
      setUpdated(false);
    };
  }, []);
  return (
    <StyledSettings>
      <Header />
      <h1>Settings</h1>
      <form onSubmit={submitHandler}>
        <legend>Update User Info</legend>
        <div>
          <label>Username:&nbsp;</label>
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleSettingsInput}
          />
        </div>
        <div>
          <label>Email:&nbsp;</label>
          <input
            type="text"
            name="email"
            value={fieldValues.email}
            onChange={handleSettingsInput}
          />
        </div>
        <div>
          <input type="submit" value="Submit Changes" />
        </div>
        {updated && <div>User info updated successfully</div>}
      </form>
      <div>
        <h3>Delete User Profile</h3>
        <h4>(warning: this cannot be undone)</h4>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </StyledSettings>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.user.id,
    userData: {
      username: state.user.username,
      email: state.user.email,
    },
    fieldValues: state.settings.fieldValues,
    updated: state.settings.updated,
    isDeleted: state.settings.isDeleted,
  };
};

export default connect(mapStateToProps, {
  updateInfo: settings.updateInfo,
  fillFields: settings.fillFields,
  handleSettingsInput: settings.handleSettingsInput,
  setUpdated: settings.setUpdated,
  deleteProfile: settings.deleteProfile,
})(Settings);
