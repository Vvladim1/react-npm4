import React from "react";
import s from "./Post.module.css";
import userpng from '../../../../assets/images/user.png'

const Post = props => {
  debugger;
  return (
    <div className={s.item}>
      <img
        src={userpng}
        alt="face"
      />
      {props.message}
      <div>
        <span>Like </span>
        {props.likesCounte}
      </div>
    </div>
  );
};

export default Post;
