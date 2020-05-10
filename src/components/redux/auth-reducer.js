import { authAPI, securityAPI } from '../../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "samurai-nerwork/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-nerwork/auth/GET_CAPTCHA_URL_SUCCESS";


let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then cuptcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      };
    
  case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {
    userId,
    email,
    login,
    isAuth
} });

export const getCaptchaUrlSuccess = (captchaUrl) => ({ 
  type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} 
  });

export const getAuthUserDataThunk = () => async(dispatch) => {
  let response = await authAPI.me();
  // .then(response => {
        let {id, email, login} = response.data.data;
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(id, email, login, true));
        }
        // });
}

export const login = (email, password, rememberMe, captcha) => async(dispatch) => {
  
  let response = await authAPI.login(email, password, rememberMe, captcha);
        //  .then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthUserDataThunk('login', {email: 'Email is wrong'}));
        } else {
          if (response.data.resultCode === 10){
            dispatch(getCuptchaUrl())
          }
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
          dispatch(stopSubmit('login', {_error: message}));
        }
}

export const getCuptchaUrl = () => async(dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl));
        
}

export const logout = () => async(dispatch) => {
  let response = await authAPI.logout();
        //  .then(response => {
        if(response.data.resultCode === 0){
          dispatch(setAuthUserData(null, null, null, false));
        }
        // });
}

export default authReducer;
