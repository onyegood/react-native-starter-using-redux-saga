import { put } from "redux-saga/effects";
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

export function* userSignupSaga(action) {
  try {
    const response = yield axios.post(`${baseUrl}auth/signup`, action.payload);
    yield put(userSignupSuccess(response.data.user));
    Actions.auth();
  } catch (error) {
    yield put(userSignupFailed(error.response.message));
  }
}

export function* forgotPasswordSaga(action) {
  try {
    const response = yield axios.post(`${baseUrl}auth/forgot-password`, action.payload);
    yield put(forgotPasswordSuccess());
    Actions.validateOTP();
  } catch (error) {
    yield put(forgotPasswordFailed(error.response.message));
  }
}

export function* validateOTPSaga(action) {
  try {
    yield AsyncStorage.setItem('passwordToken', action.payload.passwordToken);
    const response = yield axios.post(`${baseUrl}auth/validate-otp`, action.payload);
    yield put(validateOTPSuccess(response.data.userId));
    yield AsyncStorage.setItem('userId', response.data.userId);
    Actions.resetPassword();
  } catch (error) {
    yield put(validateOTPFailed(error.response.message));
  }
}

export function* resetPasswordSaga(action) {
  try {
    yield axios.post(`${baseUrl}auth/reset-password`, action.payload);
    yield put(resetPasswordSuccess());
    Actions.auth();
  } catch (error) {
    yield put(resetPasswordFailed(error.response.message));
  }
}