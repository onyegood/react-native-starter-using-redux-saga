import { put, call } from "redux-saga/effects";
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
import { currentUser, signin } from '../../api/auth';
import setAuthorizationHeader from '../../token/setAuthorizationHeader';

export function* userLoginSaga(action) {
    try {
        const data = yield call(signin, action.payload);
        setAuthorizationHeader(data.token);
        yield AsyncStorage.setItem('token', data.token);
        yield put(userLoginSuccess(data.user));
        Actions.main();
    } catch (error) {
        yield put(userLoginFailed(error.response.message));
    }
}

export function* fetchCurrentUserSaga(action) {
    try {
        const data = yield call(currentUser);
        yield put(fetchCurrentUserSuccess(data.user));
    } catch (error) {
        yield put(fetchCurrentUserFailed(error));
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