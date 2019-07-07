import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    FETCH_CURRENT_USER_REQUEST,
    FETCH_CURRENT_USER_SUCCESS,
    LOGIN_INPUTS
} from "../types/authType";

const INIT_STATE = {
    loading: false,
    auth: null,
    email: '',
    password: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
        case USER_LOGOUT_REQUEST:
        case FETCH_CURRENT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                auth: action.payload
            }
        case FETCH_CURRENT_USER_SUCCESS:
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
        case LOGIN_INPUTS:
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            };
        default:
            return state;
    }
};