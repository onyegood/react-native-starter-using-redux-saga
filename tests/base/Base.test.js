import 'react-native';
import React from 'react';
import { baseUrl } from '../../src/base';

describe('App API Base URL', () => {
  it('should be localhost link', () => {
    expect(baseUrl).toBe('http://localhost:5000/api/v1/');
  });
});