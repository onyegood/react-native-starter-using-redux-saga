import { recordSaga } from './SagaTestConfig';
import * as api from '../../../src/api/auth';
import { userLoginSuccess, userLoginFailed, fetchCurrentUserSuccess, fetchCurrentUserFailed, userLogoutSuccess, userLogoutFailed } from '../../../src/redux/actions';
import { userLoginSaga, fetchCurrentUserSaga, userLogoutSaga } from '../../../src/redux/sagas/authSaga';
jest.mock('react-native-router-flux', () => ({
  Actions: jest.fn()
}));

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn(),
    getItem: jest.fn(),
    multiSet: jest.fn(),
    multiGet: jest.fn(),
    removeItem: jest.fn(),
    getAllKeys: jest.fn()
  }
}));


describe('Auth', () => {
  api.signin = jest.fn();
  api.currentUser = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Login Saga', () => {
    it('should call userLoginSuccess and log user in', async () => {
      const responseData = {
        success: true,
        token: 'token2234',
        user: {
          firstName: 'Dan'
        }
      }

      api.signin.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        userLoginSaga,
        responseData
      );
      expect(api.signin.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(userLoginSuccess(responseData.user));
    });

    it('should call userLoginFailed and return an error', async () => {
      const responseData = {
        error: 'Something went wrong!'
      }

      api.signin.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        userLoginSaga,
        responseData
      );
      expect(api.signin.mock.calls.length).toBe(1);
      expect(dispatched).not.toContainEqual(userLoginFailed(responseData.error));
    });
  });

  describe('Fetch Current User Saga', () => {
    it('should call fetchCurrentUserSuccess and fetch current user', async () => {
      const responseData = {
        success: true,
        token: 'token2234',
        user: {
          firstName: 'Dan'
        }
      }

      api.currentUser.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        fetchCurrentUserSaga,
        responseData
      );
      expect(api.currentUser.mock.calls.length).toBe(1);
      expect(dispatched).toContainEqual(fetchCurrentUserSuccess(responseData.user));
    });

    it('should call fetchCurrentUserFailed and return an error', async () => {
      const responseData = {
        error: 'Something went wrong!'
      }

      api.currentUser.mockImplementation(() => responseData);

      const dispatched = await recordSaga(
        fetchCurrentUserSaga,
        responseData
      );
      expect(api.currentUser.mock.calls.length).toBe(1);
      expect(dispatched).not.toContainEqual(fetchCurrentUserFailed(responseData.error));
    });
  });

  describe('Log Out User', () => {
    it('should call userLogoutSuccess and log user out', async () => {
      const dispatched = await recordSaga(
        userLogoutSaga
      );
      expect(dispatched).toContainEqual(userLogoutSuccess('Logout successfully!'));
    });

    it('should call userLogoutFailed and return an error', async () => {
      const dispatched = await recordSaga(
        userLogoutSaga
      );
      expect(dispatched).toContainEqual(userLogoutFailed('Logout failed'));
    });
  });
});