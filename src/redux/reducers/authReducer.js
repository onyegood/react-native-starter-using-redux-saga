import { USER_LOGIN_REQUEST } from "../types/authType";

const INIT_STATE = {
    loading: false,
    user: null
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }
        default:
            return state;
    }
};