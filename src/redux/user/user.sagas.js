import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CREATE_USER_START
} from './user.types';

import {
  signInFailure,
  signInSuccess,
} from './user.actions';

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from '../../firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth) {
  const userRef = yield call(createUserProfileDocument, userAuth);
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
    const { user } = auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  }
  catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* createUserWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
    yield createUserProfileDocument(user, { displayName });
  }
  catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCreateUserWithEmailStart() {
  yield takeLatest(CREATE_USER_START, createUserWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCreateUserWithEmailStart)
  ]);
}