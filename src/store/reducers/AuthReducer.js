// TYPES IMPORT
import * as authTypes from '../types/AuthTypes';

const initialState = {
    loggedIn : true
};

const AuthReducer = (state= initialState, action) => {

    switch(action.type) {
        
        case(authTypes.LOGIN):
            return {...state, loggedIn : true};
        case(authTypes.LOGOUT):
            return {...state, loggedIn : false};
        default:
            return state;
    }
};

export default AuthReducer;