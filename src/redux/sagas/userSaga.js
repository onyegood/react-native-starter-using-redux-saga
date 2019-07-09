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
import { baseUrl } from '../../base';
import { signup, forgotPassword, resetPassword, otp } from "../../api/user";

export function* userSignupSaga(action) {
  try {
    const data = yield call(signup, action.payload);
    yield put(userSignupSuccess(data.user));
    Actions.auth();
  } catch (error) {
    yield put(userSignupFailed(error.response.message));
  }
}

export function* forgotPasswordSaga(action) {
  try {
    yield call(forgotPassword, action.payload);
    yield put(forgotPasswordSuccess());
    Actions.validateOTP();
  } catch (error) {
    yield put(forgotPasswordFailed(error.response.message));
  }
}

export function* validateOTPSaga(action) {
  try {
    yield AsyncStorage.setItem('passwordToken', action.payload.passwordToken);
    const data = yield call(otp, action.payload);
    yield put(validateOTPSuccess(data.userId));
    yield AsyncStorage.setItem('userId', data.userId);
    Actions.resetPassword();
  } catch (error) {
    yield put(validateOTPFailed(error.response.message));
  }
}

export function* resetPasswordSaga(action) {
  try {
    yield call(resetPassword, action.payload);
    yield put(resetPasswordSuccess());
    Actions.auth();
  } catch (error) {
    yield put(resetPasswordFailed(error.response.message));
  }
}