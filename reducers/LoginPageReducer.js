import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: ''
}
export default LoginPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            break;
        default:
            return state;
            break;
    }
}