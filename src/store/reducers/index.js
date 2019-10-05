
import { combineReducers } from 'redux';

// REDUCERS
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    UsersReducer,
    AuthReducer
});

export default RootReducer;