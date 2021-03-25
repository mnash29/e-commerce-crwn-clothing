import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CHECK_USER_SESSION,
  SIGN_OUT_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS
} from './user.types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  payload: error
});

export const createUserWithEmailStart = emailPasswordDisplayName => ({
  type: CREATE_USER_START,
  payload: emailPasswordDisplayName
});

export const createUserWithEmailSuccess = ({ user, additionalData }) => ({
  type: CREATE_USER_SUCCESS,
  payload: { user, additionalData }
});

export const createUserWithEmailFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: error
});