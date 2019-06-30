import { Platform } from 'react-native';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    LOGIN_INPUTS,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    VALIDATE_OTP_REQUEST,
    VALIDATE_OTP_SUCCESS
} from "../types/authType";

const INIT_STATE = {
    loading: false,
    auth: null,
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    phone: '',
    role: '5c92271643a4bf0ff09e8266',
    email: 'goodnews@softcom.ng',
    password: 'password',
    confirmPassword: '',
    platform: Platform.OS,
    passwordToken: ''

};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_LOGOUT_REQUEST:
        case FETCH_CURRENT_USER_REQUEST:
        case USER_SIGNUP_REQUEST:
        case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
        case VALIDATE_OTP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VALIDATE_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                userId: action.payload
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: action.payload
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: null
            }
        case FETCH_CURRENT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: action.payload
            }
        case LOGIN_INPUTS:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        default:
            return state;
    }
};