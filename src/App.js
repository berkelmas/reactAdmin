import React, { Suspense, useEffect } from 'react';
import './App.css';

// REACT ROUTER
import { Switch, Route } from 'react-router-dom';

// AUTH GUARD
import AuthGuard from './guards/auth-guard';

// REACT REDUX
import { useDispatch } from 'react-redux';

// REDUX ACTIONS
import { checkLoginState } from './store/actions/AuthActions';

function App() {

  // LAYOUT LAZY IMPORT
  const LazyLayout = React.lazy(() => import('./components/layout/layout'));

  // LOGIN PAGE LAZY IMPORT
  const LazyLogin = React.lazy(() => import('./components/login/login'));

  const dispatch = useDispatch();

  useEffect(() => {
    // CHECK WHETHER USER ALREADY LOGGED IN OR NOT.
    dispatch(checkLoginState());
  },  [])

  return (

    <Suspense fallback={<div><p>Loading...</p></div>}>
      <Switch>
        <Route path="/login" component={LazyLogin} />
        <AuthGuard path="/main" component={LazyLayout} />
      </Switch>
    </Suspense>
  );
};


export default App;
