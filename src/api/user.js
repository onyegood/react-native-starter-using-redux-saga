import axios from 'axios';
import { baseUrl } from '../base';

const signup = async payload => {
  const response = await axios.post(`${baseUrl}auth/signup`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const forgotPassword = async payload => {
  const response = await axios.post(`${baseUrl}auth/forgot-password`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const resetPassword = async payload => {
  const response = await axios.post(`${baseUrl}auth/reset-password`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const otp = async payload => {
  const response = await axios.post(`${baseUrl}auth/validate-otp`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

export { signup, forgotPassword, resetPassword, otp };