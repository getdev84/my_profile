import React,{lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';


import   './crown-App.css';

// import {HomePage , ShopPage , SignInAndSignUpPage , CartTable } from './pages';

import {Header} from './components';
import ErrorBoundery from './components/error-boundery/error-boundery.component.jsx'
const HomePage = lazy(()=> import('./pages/homepage/homepage.component.jsx'));
const ShopPage = lazy(()=> import('./pages/shop/shop.component.jsx'));
const SignInAndSignUpPage =lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'));
const CartTable=lazy(()=> import('./pages/crat-table/cart-table.component.jsx'));
function CrownApp() {
  return (
    <div className='cr' >
      <Header />
      <Switch>
      <ErrorBoundery>
        
      <Suspense fallback={<div>...Loading</div>} >
        <Route exact path='/cr' component={HomePage} />
        <Route path='/cr/shop' component={ShopPage} />
        <Route exact path='/cr/signin' component={SignInAndSignUpPage} />
        <Route exact path='/cr/cart_table' component={CartTable} />
      </Suspense>
        
      </ErrorBoundery>
      </Switch>
    </div>
  );
}

export default CrownApp;
