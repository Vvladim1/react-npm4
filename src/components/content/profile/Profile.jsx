import React, {useState} from "react";
import s from "./profile.module.css";
import Preloader from "../../common/preload/preload";
import ProfileStatusWithHooks from "./prifileStarusWithHooks";
import ProfileDataForm from './ProfileDataForm';
// import onRest from '../../../assets/images/programmer_on_vacation.jpg'

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false);


  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    const Promise = saveProfile(formData)
    Promise.then(
      () => {setEditMode(false);}
    );
  }

  return (
    <div>
      {/* <img
        width="100%"
        alt="sea"
        src={onRest} /> */}
      <div className={s.profile}>
        <div>
        <div className={s.ava}>
          <img
            className={s.photo}
            src={
              profile.photos.large ||
              "data:image/jpeg;base64,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"
            }
            alt="user"
          />
          <label>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
          </label>
          
        </div>
        </div>
        {editMode 
                  ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> 
                  : <ProfileData goToEditMode={()=>{setEditMode(true)}} 
                                 profile={profile} 
                                 isOwner={isOwner} 
                                 editMode={editMode}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
  <div>
    <b>{profile.fullName}</b>
  </div>
  <div>
    <b>Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
  </div>
  <div>
    <b>My professional skils: </b> {profile.lookingForAJobDescription}
  </div>
  <div>
    <b>About me: </b> {profile.aboutMe}
  </div>
  <div>
    <b>Contacts: </b>
    {Object.keys(profile.contacts).map((key) => {
      return (
        <Contact
          key={key}
          contactTitle={key}
          contactValue={profile.contacts[key]}
        />
      );
    })}
  </div>
</div>
}


const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contacts}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};


export default Profile;
