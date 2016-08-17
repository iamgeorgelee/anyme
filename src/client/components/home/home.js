'use strict';
import './home.less';

import React from 'react';
import Router from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import UserActions from '../../flux/actions/user-actions';
import UserStore from '../../flux/stores/user-store';
import ActionTypes from '../../flux/constants/action-types';
import UserProfile from '../user-profile';
import UserItems from '../user-items';
import LeftSidebar from '../left-sidebar';
import UserHome from '../user-home';



var RouteHandler = Router.RouteHandler;


export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function() {
    UserStore.on(ActionTypes.SIGNOUT_RES, this.goToLogin);
    UserStore.on(ActionTypes.SIGNOUT_ERR, this.goToError);
    UserStore.on(ActionTypes.ME_ERR, this.goToLogin);
  },

  goToError: function(){
    if(this.context.router){
      console.log('Navigating to error...');
      this.context.router.transitionTo('error');
    }
  },

  goToLogin: function(){
    if(this.context.router){
      console.log('Navigating home...');
      this.context.router.transitionTo('app');
    }
  },

  signOut: function(){
    UserActions.signOut();
  },



  render: function() {

    return (
      <div className="home container-full">
        <Navbar>
          <Nav pullRight bsStyle="pills">
            <NavItem href="/home">Home</NavItem>
            <NavItem href="/family">My family</NavItem>
            <NavItem onClick={this.signOut}>Logout</NavItem>
          </Nav>   
        </Navbar>
        <RouteHandler />
      </div>
    );

  }
});
