import React from 'react';

// CSS MODULE
// import classes from './home.module.scss';

// REDUX
import { connect, useSelector } from 'react-redux';

const HomePage = props => {

    const username = useSelector(state => state.AuthReducer.username)

    return (
        <div>
            <p>Welcome to Home Page: { username }</p>
        </div>
    );
};

const mapStateToProps = state => ({
    username : state.AuthReducer.username
})

export default connect(mapStateToProps)(HomePage);