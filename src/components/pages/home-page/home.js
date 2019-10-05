import React from 'react';

// CSS MODULE
// import classes from './home.module.scss';

// REDUX
import { connect, useDispatch } from 'react-redux';

// ACTIONS FOR REDUX ( AUTHACTIONS )
import { loginAction, logoutAction } from '../../../store/actions/AuthActions';

// MATERIAL UI
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const HomePage = props => {

    const dispatch = useDispatch()

    const toggleAuthState = () => {
        props.loggedIn ? dispatch(logoutAction()) : dispatch(loginAction());
    };

    return (
        <div>
            <p>Welcome to Home Page...</p>
            {props.loggedIn ? 'Logged In' : 'NO Auth'}
            <FormControlLabel
                control={
                    <Switch checked={props.loggedIn} onChange={toggleAuthState} color="primary" />
                }
                label="Login State"
            />
        </div>
    );
};

const mapStateToProps = state => ({
    loggedIn : state.AuthReducer.loggedIn
})

export default connect(mapStateToProps)(HomePage);