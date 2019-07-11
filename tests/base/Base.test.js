import 'react-native';
import React from 'react';
import { baseUrl } from '../../src/base';

describe('App API Base URL', () => {
  it('should be production base url', () => {
    expect(baseUrl).toBe('https://app-staging-api.herokuapp.com/api/v1/');
  });
});