import React, { useState, useEffect } from 'react';

// REACT ROUTER
import { Redirect } from 'react-router';

// REDUX
import { connect, useDispatch } from 'react-redux';

// REDUX ACTIONS
import { loginAction } from '../../store/actions/AuthActions';

// LOGIN CSS CLASSES MODULE
import classes from './login.module.scss';

// MATERIAL UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = props => {

    // REDUX DISPATCH FOR HOOKS
    const dispatch = useDispatch();

    // COMPONENT BASED STATE TO HANDLE USER INPUT
    const [loginState, updateLoginState] = useState({
        username : '',
        password : '',
    });

    useEffect(() => {
        console.log(props.loading);
    }, [])


    // HANDLE USER INPUT
    const changeHandler = event => {

        // USE event.persist() BECAUSE OF SYNTHETIC EVENT IN REACT.
        event.persist();

        updateLoginState(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }))
    }

    const handleLogin = e => {
        dispatch(loginAction(loginState.username, loginState.password));
        e.preventDefault();
    }

    return (
        <React.Fragment>

        {/* If Logged In; Automatically Redirect to Main Page... */}
        {props.loggedIn && <Redirect to="/main" />}

        {/* LOGIN COMPONENT STARTS HERE... */}
        <div className={classes.LoginPage}>
            <div className={classes.LoginFormContainer}>
                <div className={classes.LoginFormContainerHeader}>
                    <h2 className="lead mb-0">Login Form</h2>
                </div>
                <div className={classes.LoginFormContainerBody}>
                    
                    <div className="row">
                        <div className="col-md-8 col-sm-12 offset-md-2 mt-5">
                            <form onSubmit={e => handleLogin(e)}>
                                <TextField 
                                    id="username"
                                    label="Username"
                                    margin="normal"
                                    className="w-100"
                                    
                                    value={loginState.username}
                                    onChange={e => changeHandler(e)}
                                />
                                <TextField
                                    id="password"
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    className="w-100"

                                    value={loginState.password}
                                    onChange={e => changeHandler(e)}
                                />
                                {
                                    props.loading ? 
                                    <div className="text-center mt-4">
                                        <CircularProgress />
                                    </div>

                                    :

                                    <Button
                                        variant="contained"
                                        type="submit"
                                        style={{backgroundColor : '#039be5', color : 'white'}}
                                        className="w-100 mt-3"
                                    >Login</Button>

                                }
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </React.Fragment>
    )
};

const mapStateToProps = state => ({
    loading : state.AuthReducer.loading,
    loggedIn : state.AuthReducer.loggedIn
})

export default connect(mapStateToProps)(Login);