import { put, call } from "redux-saga/effects";
import axios from "axios";
import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import {
  userSignupSuccess,
  userSignupFailed,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  resetPasswordSuccess,
  resetPasswordFailed,
  validateOTPSuccess,
  validateOTPFailed
} from "../actions";

import { signup, forgotPassword, resetPassword, otp } from "../../api/user";

export function* userSignupSaga(action) {
  try {
    const data = yield call(signup, action.payload);
    yield put(userSignupSuccess(data));
    Actions.auth();
  } catch (error) {
    yield put(userSignupFailed(error));
  }
}

export function* forgotPasswordSaga(action) {
  try {
    const data = yield call(forgotPassword, action.payload);
    yield put(forgotPasswordSuccess(data));
    Actions.validateOTP();
  } catch (error) {
    yield put(forgotPasswordFailed(error));
  }
}

export function* validateOTPSaga(action) {
  try {
    const data = yield call(otp, action.payload);
    yield put(validateOTPSuccess(data.userId));
    yield AsyncStorage.setItem('passwordToken', action.payload.passwordToken);
    yield AsyncStorage.setItem('userId', data.userId);
    Actions.resetPassword();
  } catch (error) {
    yield put(validateOTPFailed(error));
  }
}

export function* resetPasswordSaga(action) {
  try {
    const data = yield call(resetPassword, action.payload);
    yield put(resetPasswordSuccess(data));
    Actions.auth();
  } catch (error) {
    yield put(resetPasswordFailed(error));
  }
}