import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILD,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILD,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILD,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
  VALIDATE_OTP_FAILD,
  USER_INPUTS
} from "../types/userType";

export const userSignupRequest = (payload) => ({
  type: USER_SIGNUP_REQUEST,
  payload
});

export const userSignupSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  payload
});

export const userSignupFailed = (payload) => ({
  type: USER_SIGNUP_FAILD,
  payload
});

export const forgotPasswordRequest = (payload) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload
});

export const forgotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload
});

export const forgotPasswordFailed = (payload) => ({
  type: FORGOT_PASSWORD_FAILD,
  payload
});

export const resetPasswordRequest = (payload) => ({
  type: RESET_PASSWORD_REQUEST,
  payload
});

export const resetPasswordSuccess = (payload) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload
});

export const resetPasswordFailed = (payload) => ({
  type: RESET_PASSWORD_FAILD,
  payload
});

export const validateOTPRequest = (payload) => ({
  type: VALIDATE_OTP_REQUEST,
  payload
});

export const validateOTPSuccess = (payload) => ({
  type: VALIDATE_OTP_SUCCESS,
  payload
});

export const validateOTPFailed = (payload) => ({
  type: VALIDATE_OTP_FAILD,
  payload
});

export const userEntries = ({ prop, value }) => ({
  type: USER_INPUTS,
  payload: { prop, value }
});
