// TYPES IMPORT
import * as authTypes from '../types/AuthTypes';

// BASE LOGIN ACTION
export const loginAction = (username, password) => {
    return dispatch => {
        // WAIT FOR 1 SECOND TO ACT LIKE A HTTP REQUEST.
        // SET LOADING TRUE BEFORE ASYNC ACTION FINISHES.
        dispatch(loginStartAction())
        setTimeout(() => {
            if (username === 'berkelmas' && password === '123456') {
                // SETS LOCALSTORAGE
                successLoginLocalStorage(username, password);

                // TRIGGERS A REDUCER
                dispatch(successLoginAction(username));
            } else {
                dispatch(failedLoginAction());
            }
        }, 1000)
    }
};

// SET LOCALSTORAGE ON LOGIN
const successLoginLocalStorage = (username, password) => {
    const newUser = JSON.stringify({username, password});
    localStorage.setItem('user', newUser);
};


// CHECKS LOGIN STATE; WHENEVER NEEDED.
export const checkLoginState = (username, password) => {
    return dispatch => {
        dispatch(loginStartAction());

        setTimeout(() => {
            const localStorageUser = JSON.parse(localStorage.getItem('user'));
            if (localStorageUser) {
                // If localstorage user exists...
                localStorageUser.username === 'berkelmas' && localStorageUser.password === '123456' ? dispatch(successLoginAction(localStorageUser.username)) : dispatch(failedLoginAction());
            } else {
                // if does not even exists; we still need to make loading state false.
                dispatch(failedLoginAction());
            }
        }, 1000);
    }
};



// LOGIN ACTION RESULTS
export const successLoginAction = (username) => ({type : authTypes.SUCCESS_LOGIN, payload : {username : username, loading : false}})
export const failedLoginAction = () => ({type : authTypes.FAILED_LOGIN, payload : { loading : false }})

// START LOGIN REQUEST
export const loginStartAction = () => ({type: authTypes.START_LOGIN, payload : {loading : true}})

// LOGOUT
export const logoutAction = () => ({type : authTypes.LOGOUT});
