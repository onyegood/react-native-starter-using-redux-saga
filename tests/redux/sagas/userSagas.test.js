import { userSignupSaga } from '../../../src/redux/sagas/userSaga';
import { recordSaga } from './TestUtils';
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

  it('should get profile from API and call success action if authenticated', async () => {
    const data = {
      email: 'jj@gmail.com',
      password: 'password',
      firstName: 'Raymond',
      middleName: 'Clackson',
      lastName: 'Benson',
      gender: 'Female',
      phone: '07031111056',
      role: '5c92271643a4bf0ff09e8266'
    };

    api.signup.mockImplementation(() => data);

    const dispatched = await recordSaga(
      userSignupSaga
    );

    expect(api.signup).toHaveBeenCalledWith(1);
    expect(dispatched).toContainEqual(userSignupSuccess(data));
  });
});