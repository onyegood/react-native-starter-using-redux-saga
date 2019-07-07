import { Platform } from 'react-native';
import React from 'react';
import authReducer from '../../../src/redux/reducers/authReducer';
import { users } from '../../data';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  LOGIN_INPUTS
} from '../../../src/redux/types/authType';

const INIT_STATE = {
  auth: null,
  loading: false,
  email: '',
  password: ''
};
describe('Auth Reducer', () => {
  it('should set default state to empty for all fields', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(INIT_STATE);
  });

  describe('User login', () => {
    it('should call USER_LOGIN_REQUEST with null as payload and set loading to true', () => {
      const action = {
        type: USER_LOGIN_REQUEST
      }

      const resonse = authReducer(null, action);
      const result = {
        loading: true
      }

      expect(resonse).toEqual(result);
    });

    it('should call USER_LOGIN_SUCCESS with user payload and set loading to false', () => {

      const payload = {
        auth: {
          email: 'test@yahoo.com',
          password: 'password'
        }
      }
      const action = {
        type: USER_LOGIN_SUCCESS,
        payload: payload.auth
      }

      const resonse = authReducer(payload, action);

      const result = {
        auth: {
          email: 'test@yahoo.com',
          password: 'password'
        },
        loading: false
      }

      expect(resonse).toEqual(result);
    });

  });

  describe('Fetch Current User', () => {
    it('should call FETCH_CURRENT_USER_REQUEST with null as payload and set loading: true', () => {

      const action = {
        type: FETCH_CURRENT_USER_REQUEST
      };

      const resonse = authReducer(null, action);

      const result = {
        loading: true
      };

      expect(resonse).toEqual(result);

    });

    it('should call FETCH_CURRENT_USER_SUCCESS return user payload and set loading: false', () => {

      const payload = {
        auth: users[0]
      }
      const action = {
        type: FETCH_CURRENT_USER_SUCCESS,
        payload: payload.auth
      };

      const resonse = authReducer(payload, action);

      const result = {
        auth: payload.auth,
        loading: false
      };

      expect(resonse).toEqual(result);
    });
  });

  describe('User Logout', () => {
    it('should call USER_LOGOUT_REQUEST with null as payload and set loading: true', () => {

      const action = {
        type: USER_LOGOUT_REQUEST
      }

      const resonse = authReducer(null, action);

      const result = {
        loading: true
      }

      expect(resonse).toEqual(result);
    });

    it('should call USER_LOGOUT_SUCCESS with null as paylod, remove token from AsyncStorage and set loading: false', () => {

      const action = {
        type: USER_LOGOUT_SUCCESS
      }

      const resonse = authReducer(null, action);

      const result = {
        loading: false,
        auth: null
      }

      expect(resonse).toEqual(result);
    });

  });

  describe('Login Entries', () => {
    it('should accept user input as prop: `email`, value: `testing@yahoo.com`', () => {

      const payload = {
        prop: 'email',
        value: 'testing@yahoo.com'
      }

      const action = {
        type: LOGIN_INPUTS,
        payload
      }

      const response = authReducer(null, action);

      const result = {
        email: 'testing@yahoo.com'
      }

      expect(response).toEqual(result);

    });
  });

});