import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ROUTER
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './users.module.scss';

// USER DETAIL COMPONENT
import UserDetail from '../user-detail-page/user-detail';

// MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';

const UsersPage = props => {

    const [usersState, updateUsersState] = useState({
        users : [],
        loading : false
    });

    useEffect(() => {
        updateUsersState(prevState => ({...prevState, loading : true}))
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                updateUsersState(prevState => ({...prevState, users : res.data, loading : false}));
            })
            .catch(err => {
                console.log(err);
                updateUsersState(prevState => ({...prevState}));
            });
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h2>Users</h2>
                    {
                        usersState.loading ?
                
                            <CircularProgress />
                            : 
                            
                            (
                                <React.Fragment>
                                    
                                    <ul className={classes.UserList}>
                                    {usersState.users.map(user => (
                                    <NavLink className={classes.UserItem} key={user.id} to={`/main/users/${user.id}`}>
                                        <li>{user.name}</li>
                                    </NavLink>
                                    ))}
                                    </ul>
                                </React.Fragment>
                            )}

                    <Switch>
                        <Route path={'/main/users/:id'} exact render={props => <UserDetail {...props} />} />
                    </Switch>
                </div>
            </div>          

        </div> 
    )
};

export default React.memo(UsersPage);