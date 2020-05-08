import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./profile/Profile";

const Content = props => {
  return (
    <div>
      <Profile profile={props.profile}
               isOwner={props.isOwner} 
               saveProfile={props.saveProfile}
               savePhoto={props.savePhoto}
               status={props.status} 
               updateStatus={props.updateStatus} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Content;
