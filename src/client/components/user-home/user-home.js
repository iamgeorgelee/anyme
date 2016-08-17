'use strict';
import './user-home.less';

import React from 'react';
import Bootstrap from 'react-bootstrap';
import UserActions from '../../flux/actions/user-actions';
import UserStore from '../../flux/stores/user-store';
import ActionTypes from '../../flux/constants/action-types';
import UserProfile from '../user-profile';
import UserItems from '../user-items';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  signOut: function(){
    UserActions.signOut();
  },


  render: function() {

    return (
          
          <div className="container-full">
            <div className="row">
              <div className="user-panel col-lg-2 col-lg-offset-5">
                <UserProfile/>
              </div>
              <div className="user-items-panel col-lg-6 col-lg-offset-3">
                <UserItems />
              </div>
            </div>
          </div>
    );

  }
});
