import { combineReducers } from 'redux';
import auth from './authReducer';
import users from './userReducers';

export default combineReducers({
    auth,
    users
});