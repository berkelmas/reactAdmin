import React, {useState, Suspense} from 'react';

// GUARDS
import AuthGuard from '../../guards/auth-guard';

// REACT ROUTER
import { Switch, Route } from 'react-router-dom';


// CUSTOM COMPONENTS
/* import ModalComponent from './components/modal-component/modal.component';*/
import SideDrawer from '../side-drawer/side-drawer';
import HeaderComponent from '../header/header';

// PAGES
import HomePage from '../pages/home-page/home';

const Layout = props => {

    const [appState, updateAppState] = useState({
        showModal: false,
        drawerState: 'big'
    });

    const toggleDrawer = () => {
        updateAppState({
            ...appState,
            drawerState: appState.drawerState === 'small' ? 'big' : 'small'
        })
    };

    // LAZY LOADING USING REACT LAZY METHOD.
    const UsersLazyReact = React.lazy(() => import('../pages/users-page/users'));

    return (
        <div>
            <HeaderComponent toggledrawer={() => toggleDrawer()} drawerstate={appState.drawerState} />
            
            <SideDrawer drawerstate={appState.drawerState} />

            <div style={{marginLeft : appState.drawerState === 'small' ? '5rem' : '15rem'}} className="App pt-4 pr-4">
            
            
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/main" exact component={props => <HomePage {...props}/>} />
                
                <AuthGuard path="/main/users" component={UsersLazyReact} />
                
                <Route render={() => (<p>404 </p>)} />

            </Switch>
            </Suspense>
            </div>

            {/*
            <ModalComponent showmodal={appState.showModal} closemodal={closeModal}/>
            */}
        
        </div>
    )
};

export default Layout;