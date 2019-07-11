import { userSignupSaga } from '../../../src/redux/sagas/userSaga';
import { recordSaga } from './SagaTestConfig';
import { userSignupFailed, userSignupSuccess } from '../../../src/redux/actions';
import * as api from '../../../src/api/user';
jest.mock('react-native-router-flux', () => ({
  Actions: jest.fn()
}));
describe('userSignupSaga', () => {
  api.signup = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should be called with userSignupSuccess action creator response', async () => {

    const payload = {
      success: true
    }

    api.signup.mockImplementation(() => payload);

    const dispatched = await recordSaga(
      userSignupSaga,
      payload
    );

    expect(api.signup.mock.calls.length).toBe(1);
    expect(dispatched).toContainEqual(userSignupSuccess(payload));
  });

  it('should be called with userSignupFailed action creator response', async () => {

    const payload = {
      success: true
    }

    api.signup.mockImplementation(() => payload);

    const dispatched = await recordSaga(
      userSignupSaga,
      payload
    );

    expect(api.signup.mock.calls.length).toBe(1);
    expect(dispatched).not.toContainEqual(userSignupFailed(payload));
  });
});