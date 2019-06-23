import { USER_LOGIN_REQUEST } from "../types/authType";

export const userLoginRequest = (payload) => ({
    type: USER_LOGIN_REQUEST,
    payload
});