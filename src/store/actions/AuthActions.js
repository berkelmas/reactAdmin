// TYPES IMPORT
import * as authTypes from '../types/AuthTypes';

import axios from 'axios';

export const logoutAction = () => {
    return dispatch => axios.get('https://api.bosanmavukatim.com/kategorimakalefilter')
        .then(res => {
            dispatch({type : authTypes.LOGOUT});
        })
        .catch(console.log);    
};

export const loginAction = () => ({type: authTypes.LOGIN});
