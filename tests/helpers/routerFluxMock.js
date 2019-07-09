import React from 'react';
const RouterFluxMock = () => {
  jest.mock('react-native-router-flux', () => ({
    Actions: jest.fn()
  }));
};

export default RouterFluxMock;