import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CHECK_USER_SESSION,
  SIGN_OUT_START
} from './user.types';

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  createUserWithEmailFailure,
  createUserWithEmailSuccess
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
  const userSnapshot = yield userRef.get();
  yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* createUserWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(createUserWithEmailSuccess({ user, additionalData: { displayName } }));
  }
  catch (error) {
    yield put(createUserWithEmailFailure(error.message));
  }
}

export function* signInAfterCreateUserWithEmail({ payload: { user, additionalData }}) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
  }
  catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  }
  catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

export function* onCreateUserWithEmailStart() {
  yield takeLatest(CREATE_USER_START, createUserWithEmail);
}

export function* onCreateUserWithEmailSuccess() {
  yield takeLatest(CREATE_USER_SUCCESS, signInAfterCreateUserWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onCreateUserWithEmailStart),
    call(onCreateUserWithEmailSuccess)
  ]);
}