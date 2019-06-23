import {put} from "redux-saga/effects";
import { userLoginRequest } from "../actions/authAction";

export function* userLoginSaga(action) {
    try {
        console.log('Hello');
    } catch (errors) {
        console.log('Error here');
    }
}