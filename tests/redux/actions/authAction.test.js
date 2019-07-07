import 'react-native';
import React from 'react';
import { userLoginRequest, userLoginFailed, userLogoutSuccess, userLoginSuccess, fetchCurrentUserRequest, fetchCurrentUserSuccess, fetchCurrentUserFailed, loginEntries, userLogoutRequest, userLogoutFailed } from '../../../src/redux/actions';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILD, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAILD, LOGIN_INPUTS, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILD } from '../../../src/redux/types/authType';
import { users } from '../../data';

let user, error, OTP, resetPassword

beforeEach(() => {
  user = {
    email: users[0].email,
    password: users[0].password
  },
    error = {
      error: 'OOps!, some thing went wrong!'
    }
});

describe('Auth user input', () => {
  it('should accept user input to update reducer state', () => {
    const wrapper = loginEntries({ prop: 'email', value: user.email });
    expect(wrapper).toEqual({
      type: LOGIN_INPUTS,
      payload: { prop: 'email', value: 'john@gmail.com' }
    });
  });
});

describe('Auth Action', () => {

  describe('Login in user', () => {
    it('should call userLoginRequest method with email and password', () => {
      const wrapper = userLoginRequest(user);
      expect(wrapper).toEqual({
        type: USER_LOGIN_REQUEST,
        payload: user
      })
    });
    it('should call userLoginSuccess method and log valid user in', () => {
      const wrapper = userLoginSuccess(user);
      expect(wrapper).toEqual({
        type: USER_LOGIN_SUCCESS,
        payload: user
      })
    });

    it('should userLoginFailed mathod and return error message', () => {
      const wrapper = userLoginFailed(error);
      expect(wrapper).toEqual({
        type: USER_LOGIN_FAILD,
        payload: error
      });
    });
  });

  describe('Current user', () => {
    it('shoul call fetchCurrentUserRequest method with success responnse and return current user', () => {
      const wrapper = fetchCurrentUserRequest(user);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_REQUEST,
        payload: user
      });
    });

    it('shoul call forgotPasswordSuccess method with success response and return current user', () => {
      const wrapper = fetchCurrentUserSuccess(user);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: user
      });
    });

    it('shoul call fetchCurrentUserFailed method with error response', () => {
      const wrapper = fetchCurrentUserFailed(error);
      expect(wrapper).toEqual({
        type: FETCH_CURRENT_USER_FAILD,
        payload: error
      })
    });
  });

  describe('Logout user', () => {
    it('should call userLogoutRequest method', () => {
      const wrapper = userLogoutRequest();
      expect(wrapper).toEqual({
        type: USER_LOGOUT_REQUEST
      });
    });

    it('should call userLogoutSuccess method set auth to null', () => {
      const wrapper = userLogoutSuccess();
      expect(wrapper).toEqual({
        type: USER_LOGOUT_SUCCESS
      });
    });

    it('should call userLogoutFailed method with error response', () => {
      const wrapper = userLogoutFailed();
      expect(wrapper).toEqual({
        type: USER_LOGOUT_FAILD
      });
    });
  });
});

