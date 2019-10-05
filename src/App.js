import React, { useState, Suspense } from 'react';
import './App.css';

// REACT ROUTER
import { Switch, Route } from 'react-router-dom';

// FONT AWESOME PRO IMPORT
import './assets/fontawesome/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* import ModalComponent from './components/modal-component/modal.component';*/
import SideDrawer from './components/side-drawer/side-drawer';
import HeaderComponent from './components/header/header';

// PAGES
import HomePage from './components/pages/home-page/home';
//import UsersPage from './components/pages/users-page/users';

// GUARDS
import AuthGuard from './guards/auth-guard';

// LAZY LOAD WRAPPER
import LazyLoadWrapper from './hoc/lazy-load-wrapper';

function App() {

  const [appState, updateAppState] = useState({
    showModal : false,
    drawerState : 'big'
  });

/*   const closeModal = () => {
    updateAppState({
      ...appState,
      showModal : false
    });
  }

  const openModal = () => {
    updateAppState({
      ...appState,
      showModal : true
    });
  } */

  const toggleDrawer = () => {
    updateAppState({
      ...appState,
      drawerState : appState.drawerState === 'small' ? 'big' : 'small'
    })
  }

  // LAZY LOADING USING OUR CUSTOM APPROACH
  const UsersLazy = LazyLoadWrapper(() => {
    return import('./components/pages/users-page/users');
  });

  // LAZY LOADING USING REACT LAZY METHOD.
  const UsersLazyReact = React.lazy(() => import('./components/pages/users-page/users'));

  return (
    
      <div>
        <HeaderComponent toggledrawer={() => toggleDrawer()} drawerstate={appState.drawerState} />
        
        <SideDrawer drawerstate={appState.drawerState} />

        <div style={{marginLeft : appState.drawerState === 'small' ? '5rem' : '15rem'}} className="App pt-4 pr-4">
          
          
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={props => <HomePage {...props}/>} />
              
            <AuthGuard path="/users" component={UsersLazyReact} />
            
            <Route render={() => (<p>404 </p>)} />

          </Switch>
        </Suspense>
        </div>

        {/*
        <ModalComponent showmodal={appState.showModal} closemodal={closeModal}/>
        */}
      
      </div>
    
  );
};


export default App;
