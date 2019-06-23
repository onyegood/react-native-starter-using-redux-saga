import {takeLatest} from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../types/authType";
import { userLoginSaga } from "./authSaga";

export default function* rootSaga() {
    yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
};