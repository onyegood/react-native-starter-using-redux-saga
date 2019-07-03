import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { SigninScene } from '../../../src/pages/auth/SigninScene';

jest.mock('react-native-router-flux', () => ({
  Actions: jest.fn()
}));
// import { Actions } from 'react-native-router-flux';

let onButtonPress, wrapper

beforeEach(() => {
  // onButtonPress = jest.fn();
  // wrapper = shallow(<SigninScene onButtonPress={onButtonPress} />);
});

describe('Signin Scene', () => {
  it('should have on button', () => {
    // expect(wrapper.find('Button').toHaveLength(1))
  });
});