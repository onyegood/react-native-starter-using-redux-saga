import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/component/layout/Header';

describe('Header Component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});