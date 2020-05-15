import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/formsControls/formsControls";
import { reduxForm } from "redux-form";
import s from "../../common/formsControls/formsControls.module.css";
import { Field } from "redux-form";
// import style from "../../common/formsControls/formsControls.module.css";

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button onClick={() => {}}>Save</button>
      </div>
      {error && <div  className={s.formSummeryError}>
                {error}
            </div>}
      <div>
        <b>Full name</b>:{" "}
        {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skils</b>:{" "}
        {createField(
          "My professional skils",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>: {" "}{createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts: </b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
          );
        })}
      </div>
      {/* <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div> */}
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
