import { Platform } from 'react-native';
import React from 'react';
import userReducers from '../../../src/redux/reducers/userReducers';
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  USER_INPUTS
} from '../../../src/redux/types/userType';
import { users } from '../../data';
describe('User module actions', () => {
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

  it('should set default state to empty for all fields', () => {

    const action = {
      type: '@@INIT'
    }

    const state = userReducers(undefined, action);

    expect(state).toEqual(INIT_STATE);
  });

  describe('User Signup', () => {
    it('should call USER_SIGNUP_REQUEST to set loading to true', () => {

      const action = {
        type: USER_SIGNUP_REQUEST
      }

      const response = userReducers(null, action);

      expect(response).toEqual({ loading: true });
    });

    it('should call USER_SIGNUP_SUCCESS with user payload containing user informantion', () => {

      const user = {
        _id: 5,
        email: "testing@gmail.com",
        firstName: "Testspack",
        gender: "Male",
        lastName: "Tester",
        middleName: "Testiano",
        password: "password",
        phone: "07031111000",
        role: "5c92271643a4bf0ff09e8266"
      }

      const action = {
        type: USER_SIGNUP_SUCCESS,
        payload: user
      }

      const response = userReducers(users, action);
      expect(response.users).toEqual([...users, user]);

    });

  });

  describe('Forgot Password', () => {
    it('should call FORGOT_PASSWORD_REQUEST and set loading to true', () => {

      const action = {
        type: FORGOT_PASSWORD_REQUEST
      }

      const response = userReducers(null, action);

      const result = {
        loading: true
      }
      expect(response).toEqual(result);

    });

    it('should call FORGOT_PASSWORD_SUCCESS with user email as payload', () => {
      const action = {
        type: FORGOT_PASSWORD_SUCCESS
      }

      const response = userReducers(null, action);

      const result = { loading: false }

      expect(response).toEqual(result);
    });
  });

  describe('Validate Rest Password OTP', () => {
    it('should call VALIDATE_OTP_REQUEST to set loading to true', () => {

      const action = {
        type: VALIDATE_OTP_REQUEST
      };

      const response = userReducers(null, action);

      const result = {
        loading: true
      }

      expect(response).toEqual(result);
    });

    it('should call VALIDATE_OTP_SUCCESS with payload of OTP and set loading to false', () => {

      const payload = {
        userId: 1
      }
      const action = {
        type: VALIDATE_OTP_SUCCESS,
        payload: payload
      }

      const response = userReducers(payload, action);
      const result = {
        userId: { userId: users[0]._id },
        loading: false
      }

      expect(response).toEqual(result);
    });
  });

  describe('Reset Password', () => {
    it('should call RESET_PASSWORD_REQUEST with null as payload and set loading to true', () => {

      const action = {
        type: RESET_PASSWORD_REQUEST
      }

      const response = userReducers(null, action);
      const result = {
        loading: true
      }
      expect(response).toEqual(result);

    });

    it('should call RESET_PASSWORD_SUCCESS with payload and set loading to false', () => {

      const action = {
        type: RESET_PASSWORD_SUCCESS
      }

      const response = userReducers(null, action);
      const result = {
        loading: false
      }
      expect(response).toEqual(result);
    });
  });

  describe('USER INPUTS', () => {
    it('should call USER_INPUTS and accept user data as prop and value', () => {
      const payload = {
        prop: 'email',
        value: 'testing@yahoo.com'
      }
      const action = {
        type: USER_INPUTS,
        payload
      }

      const response = userReducers(null, action);
      const result = {
        email: 'testing@yahoo.com'
      }

      expect(response).toEqual(result);
    });
  });

});

