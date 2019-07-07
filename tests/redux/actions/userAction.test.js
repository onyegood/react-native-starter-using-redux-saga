import 'react-native';
import React from 'react';
import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailed,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFailed,
  validateOTPRequest,
  validateOTPSuccess,
  validateOTPFailed,
  userEntries,
  userSignupRequest,
  userSignupSuccess,
  userSignupFailed
} from '../../../src/redux/actions';
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILD,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILD,
  VALIDATE_OTP_REQUEST,
  VALIDATE_OTP_SUCCESS,
  VALIDATE_OTP_FAILD,
  USER_INPUTS,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILD
} from '../../../src/redux/types/userType';
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

describe('User input', () => {
  it('should accept user input to update reducer state', () => {
    const wrapper = userEntries({ prop: 'email', value: user.email });
    expect(wrapper).toEqual({
      type: USER_INPUTS,
      payload: { prop: 'email', value: 'john@gmail.com' }
    });
  });
});

describe('User Action', () => {

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
});

