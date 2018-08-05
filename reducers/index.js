import { combineReducers } from 'redux';
import LoginPageReducer from './LoginPageReducer';
const rootReducer = combineReducers({
    login:LoginPageReducer
});
export default rootReducer;