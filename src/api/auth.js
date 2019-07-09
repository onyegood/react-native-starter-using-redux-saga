import axios from 'axios';
import { baseUrl } from '../base';

const currentUser = async () => {
  const response = await axios.get(`${baseUrl}users/current`);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

const signin = async payload => {
  const response = await axios.post(`${baseUrl}auth/login`, payload);
  const data = await response.data;
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data;
}

export { currentUser, signin };