import 'react-native';
import React from 'react';
const routerFluxMock = () => {
  jest.mock('react-native-router-flux', () => ({
    Actions: jest.fn()
  }));
}

export default routerFluxMock;