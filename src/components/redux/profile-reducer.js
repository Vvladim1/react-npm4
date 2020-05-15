import { userAPI, profileAPI } from "../../api/api"
import { stopSubmit } from "redux-form";


const ADD_NEW_POST = "ADD-NEW-POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCES = 'SAVE_PHOTO_SUCCES';

let initialState = {
    posts: [
      { id: 1, message: "Hello!", likesCounte: 15 },
      { id: 2, message: "how are you!", likesCounte: 20 },
      { id: 3, message: "Very vell!", likesCounte: 18 },
      { id: 4, message: "Wow", likesCounte: 12 }
    ],
    profile: null,
    status: ''
  
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCounte: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
      case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SAVE_PHOTO_SUCCES:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSucces = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos });

export const getUserProfileThunk = (userId) => {//"thankA"
  return async (dispatch) => {
    let response = await userAPI.getProfile(userId)
      dispatch(setUserProfile(response.data));
  }
}

export const getStatusThunk = (userId) => {
  return async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data));
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
      if(response.data.resultCode === 0){
      dispatch(savePhotoSucces(response.data.data.photos));
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
      if(response.data.resultCode === 0){
      dispatch(getUserProfileThunk(userId));
    }else{
      
        dispatch(stopSubmit('edit-profile',  {'_error': response.data.messages[0]} ));
        return Promise.reject(response.data.messages[0]);
      
    }
  }
}


export default profileReducer;
