import React from 'react';
import classes from './header.module.scss';

const HeaderComponent = props => {
    return (
        <div className={classes.HeaderContainer}>
            <div className="row">
                <div className="col-md-2 d-flex justify-content-between align-items-center">

                    <div className={`${classes.LogoContainer}`}>
                        <img src="http://www.pngall.com/wp-content/uploads/2016/03/Dell-Logo-3D-White-PNG.png" alt="logo"></img>
                    </div>
                    <div className={`${classes.LogoContainerToggle} mr-4`}>
                        <button  onClick={props.toggledrawer} style={{cursor : 'pointer', backgroundColor: 'transparent', border : 'none', outline : 'none', color : 'white'}}> <i style={{transform : props.drawerstate === 'small' ? 'rotate(180deg)' : 'rotate(0deg)'}} className={`fal fa-angle-left fa-3x ${classes.ToggleIcon}`}></i> </button>
                    </div>

                </div>

                <div className="offset-md-7">

                </div>

                
                    <div className="col-md-3 d-flex align-items-center justify-content-end">
                        <div className={`${classes.UserContainer} d-flex align-items-center`}>
                        <i style={{textDecoration : 'none'}} className={`fal fa-sign-out fa-lg`}></i> <a style={{textDecoration : 'none', color : 'white'}} href="/" className="mb-0 pr-3 pl-2"> Çıkış Yap </a>
                        </div>
                    </div>

            </div>



        </div>
    )
}

export default HeaderComponent;