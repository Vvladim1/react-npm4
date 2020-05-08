import React from "react";
import { createField, Input, Textarea } from "../../common/formsControls/formsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => {}}>Save</button></div>
      <div>
        <b>Full name</b>: {createField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'} )}
      </div>
      <div>
        <b>My professional skils</b>:  {createField('My professional skils','lookingForAJobDescription', [], Textarea)}
      </div>
      <div>
        <b>About me</b>:  {createField('About me','aboutMe', [], Textarea)}
      </div>
      
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
