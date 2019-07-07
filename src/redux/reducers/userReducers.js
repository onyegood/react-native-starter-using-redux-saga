import { Platform } from 'react-native';
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_INPUTS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS
} from '../types/userType';

const INIT_STATE = {
  users: [],
  loading: false,
  firstName: '',
  middleName: '',
  lastName: '',
  gender: '',
  phone: '',
  role: '5c70324dfce1a922bef32474',
  email: '',
  password: '',
  confirmPassword: '',
  platform: Platform.OS,
  passwordToken: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
    case VALIDATE_OTP_REQUEST:
      return {
        ...state,
        loading: true
      }
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        users: [...state, action.payload]
      }
    case VALIDATE_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.payload
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
    case USER_INPUTS:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    default:
      return state;
  }
}
