import { put } from "redux-saga/effects";
import axios from "axios";
import { Actions } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import {
    userLoginSuccess,
    userLoginFailed,
    userLogoutSuccess,
    userLogoutFailed,
    fetchCurrentUserSuccess,
    fetchCurrentUserFailed
} from "../actions";
import { baseUrl } from '../../base';
import setAuthorizationHeader from '../../token/setAuthorizationHeader';

export function* userLoginSaga(action) {
    try {
        const response = yield axios.post(`${baseUrl}auth/login`, action.payload);
        setAuthorizationHeader(response.data.token);
        yield AsyncStorage.setItem('token', response.data.token);
        yield put(userLoginSuccess(response.data.user));
        Actions.main();
    } catch (error) {
        yield put(userLoginFailed(error.response.message));
    }
}

export function* fetchCurrentUserSaga(action) {
    try {
        const response = yield axios.get(`${baseUrl}users/current`);
        yield put(fetchCurrentUserSuccess(response.data.user));
    } catch (error) {
        yield put(fetchCurrentUserFailed(error.response.message));
    }
}

export function* userLogoutSaga(action) {
    try {
        yield AsyncStorage.removeItem('token');
        yield put(userLogoutSuccess('Logout successful!'));
        Actions.auth();
    } catch (error) {
        yield put(userLogoutFailed('Oops! Something went wrong!'));
    }
}