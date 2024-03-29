import React from 'react';

// ROUTER
import { Route, Redirect } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';

const AuthGuard = ({component : Component, ...rest}) => {

    // Our Redux store is assigned to rest parameter in here...

    return (
        <Route {...rest} render={props => {
            return rest.loggedIn ?
            <Component {...props} />
            :
            <Redirect to="/login" />
        }} />
    )

};

const mapStateToProps = state => ({
    loggedIn : state.AuthReducer.loggedIn
})

export default connect(mapStateToProps)(AuthGuard);