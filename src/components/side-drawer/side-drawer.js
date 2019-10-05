import React from 'react';
import classes from './side-drawer.module.scss';

import { NavLink } from 'react-router-dom';

const SideDrawer = props => {

    return (
        <div>

            <div className="position-fixed">
                <ul style={{width : props.drawerstate === 'small' ? '3.5rem' : '12rem'}} className={classes.MenuListContainer}>
                    <NavLink className={`${classes.MenuListItem} mt-3`} style={{textDecoration : 'none', color : 'white', display : 'block'}} to="/" exact activeStyle={{backgroundColor : '#0277bd'}}> <i className="fal fa-home fa-lg"></i> <span className={classes.MenuListItemText}>Home</span> </NavLink>
                    <NavLink className={classes.MenuListItem} style={{textDecoration : 'none', color : 'white', display : 'block'}} to="/users" exact activeStyle={{backgroundColor : '#0277bd'}}> <i className="fal fa-users fa-lg"></i> <span className={classes.MenuListItemText}>Users</span> </NavLink>
                    <NavLink className={classes.MenuListItem} style={{textDecoration : 'none', color : 'white', display : 'block'}} to="/dsadsa" exact activeStyle={{backgroundColor : '#0277bd'}}> <i className="fal fa-home fa-lg"></i> <span className={classes.MenuListItemText}>Default Page</span> </NavLink>
                </ul>
            </div>


        </div>
    )
}

export default SideDrawer;