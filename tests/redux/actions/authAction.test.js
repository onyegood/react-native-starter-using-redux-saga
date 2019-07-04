import 'react-native';
import React from 'react';
import { userLoginRequest, userLoginFailed, userLogoutSuccess, userLoginSuccess, fetchCurrentUserRequest, fetchCurrentUserSuccess, fetchCurrentUserFailed, forgotPasswordRequest, forgotPasswordSuccess, forgotPasswordFailed, resetPasswordRequest, resetPasswordSuccess, resetPasswordFailed, validateOTPRequest, validateOTPSuccess, validateOTPFailed, loginEntries, userSignupRequest, userSignupSuccess, userSignupFailed, userLogoutRequest, userLogoutFailed } from '../../../src/redux/actions';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILD, FETCH_CURRENT_USER_REQUEST, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAILD, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILD, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILD, VALIDATE_OTP_REQUEST, VALIDATE_OTP_SUCCESS, VALIDATE_OTP_FAILD, LOGIN_INPUTS, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILD, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILD } from '../../../src/redux/types/authType';
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
  OTP = '231132',
    resetPassword = {
      password: 'password',
      tokenPassword: OTP,
      _id: '123'
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

  describe('Forgot password', () => {
    it('should call forgotPasswordRequest method with user email and return a success response', () => {
      const wrapper = forgotPasswordRequest({ email: user.email });
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_REQUEST,
        payload: { email: user.email }
      });
    });

    it('should call forgotPasswordSuccess method with valid email and return a success response', () => {
      const wrapper = forgotPasswordSuccess({ email: user.email });
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_SUCCESS,
        payload: { email: user.email }
      })
    });

    it('should call forgotPasswordFaild method and return a error response', () => {
      const wrapper = forgotPasswordFailed(error);
      expect(wrapper).toEqual({
        type: FORGOT_PASSWORD_FAILD,
        payload: error
      });
    });
  });

  describe('Reset Password', () => {
    it('should call resetPasswordRequest method with newPassword, OTP, and userID', () => {
      const wrapper = resetPasswordRequest(resetPassword);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_REQUEST,
        payload: resetPassword
      });
    });

    it('should call resetPasswordSuccess method with newPassword, OTP, userID with success response', () => {
      const wrapper = resetPasswordSuccess(resetPassword);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_SUCCESS,
        payload: resetPassword
      });
    });

    it('should call resetPasswordRequest method with error response', () => {
      const wrapper = resetPasswordFailed(error);
      expect(wrapper).toEqual({
        type: RESET_PASSWORD_FAILD,
        payload: error
      });
    });
  });

  describe('Validate OTP', () => {
    it('should call validateOTPRequest method with OTP', () => {
      const wrapper = validateOTPRequest(OTP);
      expect(wrapper).toEqual({
        type: VALIDATE_OTP_REQUEST,
        payload: OTP
      });
    });

    it('should call validateOTPSuccess method with success response and userID', () => {
      const wrapper = validateOTPSuccess(OTP);
      expect(wrapper).toEqual({
        type: VALIDATE_OTP_SUCCESS,
        payload: OTP
      });
    });

    it('should call validateOTPFailed method with error response', () => {
      const wrapper = validateOTPFailed(error);
      expect(wrapper).toEqual({
        type: VALIDATE_OTP_FAILD,
        payload: error
      });
    });
  });

  describe('New user signup with complete data', () => {
    it('should call userSignupRequest method with user data', () => {
      const wrapper = userSignupRequest(users[0]);
      expect(wrapper).toEqual({
        type: USER_SIGNUP_REQUEST,
        payload: users[0]
      });
    });

    it('should call userSignupSuccess method with create new user and return success', () => {
      const wrapper = userSignupSuccess(users[0]);
      expect(wrapper).toEqual({
        type: USER_SIGNUP_SUCCESS,
        payload: users[0]
      });
    });

    it('should call userSignupFailed method and return error', () => {
      const wrapper = userSignupFailed(error);
      expect(wrapper).toEqual({
        type: USER_SIGNUP_FAILD,
        payload: error
      });
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

