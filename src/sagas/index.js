import { all, call, put, takeLatest } from "redux-saga/effects";
import constants from "../constants";
import firebase from "../firebase";

function* handleSignUp(action) {
  console.log("Trying to Creating Account");

  yield put({ type: constants.PROGRESS });
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      action.value.email,
      action.value.password
    );
    console.log(result);
    yield put({ type: constants.SIGNUP_SUCCESS, email: result.user.email });
  } catch (error) {
    console.error(error);
    yield put({ type: constants.SIGNUP_FAILED, error });
  }
}

function* handleSignIn(action) {
  console.log("Trying to Sign In into Account");
  yield put({ type: constants.PROGRESS });
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      action.value.email,
      action.value.password
    );
    console.log(result);
    yield put({ type: constants.SIGNIN_SUCESS, email: result.user.email });
  } catch (error) {
    console.error(error);
    yield put({ type: constants.SIGNIN_FAILED, error });
  }
}
function* rootSaga() {
  yield all([
    takeLatest(constants.SIGNUP, handleSignUp),
    takeLatest(constants.SIGNIN, handleSignIn),
  ]);
}

export default rootSaga;
