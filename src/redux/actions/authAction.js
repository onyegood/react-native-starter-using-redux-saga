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
    FETCH_CURRENT_USER_FAILD
} from "../types/authType";

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

export const userLogoutRequest = () => ({
    type: USER_LOGOUT_REQUEST
});

export const userLogoutSuccess = () => ({
    type: USER_LOGOUT_SUCCESS
});

export const userLogoutFailed = () => ({
    type: USER_LOGOUT_FAILD
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
