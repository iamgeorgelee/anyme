'use strict'
import 'babel/polyfill';
import React from 'react';
import Router from 'react-router';

import App from './components/app';
import home from './components/home';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Error from './components/error';

import UserHome from './components/user-home';
import family from './components/family';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="sign-up" path="/sign-up" handler={SignUp}/>
    <Route name="home" path="/home" handler={home}>
    	<Route name="UserHome" path="/Userhome" handler={UserHome}/>
    	<Route name="family" path="/family" handler={family}/>
    	<DefaultRoute handler={UserHome}/>
    </Route>	
    <Route name="error" path="/error" handler={Error}/>
    <DefaultRoute handler={SignIn}/>
  </Route>
);

module.exports = routes;
