import React, {useState, useEffect} from 'react';
// import classes from './user-detail.module.scss';

import axios from 'axios';

//MATERIAL UI
import CircularProgress from '@material-ui/core/CircularProgress';

const UserDetail = props => {

    const [userState, updateUserState] = useState({
        user : null
    })

    useEffect(() => {
        const userid = props.match.params.id;

        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => {
                updateUserState({user : res.data});
            })
            .catch(console.log);
        
    }, [props.match.params.id])

    return (
        <div>
            {!userState.user && <CircularProgress />}
            {userState.user && userState.user.name}
        </div>
    )    
};

export default UserDetail;