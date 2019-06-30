import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILD,
    LOGIN_INPUTS,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILD,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    FETCH_CURRENT_USER_FAILD,
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
    VALIDATE_OTP_FAILD
} from "../types/authType";

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

export const userLoginRequest = (payload) => ({
    type: USER_LOGIN_REQUEST,
    payload
});

export const userLoginSuccess = (payload) => ({
    type: USER_LOGIN_SUCCESS,
    payload
});

export const userLoginFailed = (payload) => ({
    type: USER_LOGIN_FAILD,
    payload
});

export const userLogoutRequest = (payload) => ({
    type: USER_LOGOUT_REQUEST,
    payload
});

export const userLogoutSuccess = (payload) => ({
    type: USER_LOGOUT_SUCCESS,
    payload
});

export const userLogoutFailed = (payload) => ({
    type: USER_LOGOUT_FAILD,
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

export const fetchCurrentUserRequest = (payload) => ({
    type: FETCH_CURRENT_USER_REQUEST,
    payload
});

export const fetchCurrentUserSuccess = (payload) => ({
    type: FETCH_CURRENT_USER_SUCCESS,
    payload
});

export const fetchCurrentUserFailed = (payload) => ({
    type: FETCH_CURRENT_USER_FAILD,
    payload
});

export const loginEntries = ({ prop, value }) => ({
    type: LOGIN_INPUTS,
    payload: { prop, value }
});
