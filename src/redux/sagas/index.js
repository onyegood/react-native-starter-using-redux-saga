import { takeLatest } from "redux-saga/effects";
import { USER_LOGIN_REQUEST, USER_LOGOUT_REQUEST, FETCH_CURRENT_USER_REQUEST, USER_SIGNUP_REQUEST, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, VALIDATE_OTP_REQUEST } from "../types/authType";
import { userLoginSaga, userLogoutSaga, fetchCurrentUserSaga, userSignupSaga, forgotPasswordSaga, resetPasswordSaga, validateOTPSaga } from "./authSaga";

export default function* rootSaga() {
    yield takeLatest(USER_SIGNUP_REQUEST, userSignupSaga);
    yield takeLatest(USER_LOGIN_REQUEST, userLoginSaga);
    yield takeLatest(USER_LOGOUT_REQUEST, userLogoutSaga);
    yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
    yield takeLatest(VALIDATE_OTP_REQUEST, validateOTPSaga);
    yield takeLatest(RESET_PASSWORD_REQUEST, resetPasswordSaga);
    yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchCurrentUserSaga);
};