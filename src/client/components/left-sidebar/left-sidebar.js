'use strict';
import './left-sidebar.less';

import React from 'react';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount: function() {

  },

  goToError: function(){

  },

  goToLogin: function(){

  },

  signOut: function(){

  },


  render: function() {

    return (
          <div className="left-sidebar">
          	<div className="logo">
              <img src="/anyme.png" />

            </div>
            <div className="features">
              <h2>Create Family</h2>
              <h2>
                <a href="/myfamily">My Family</a>
              </h2>
              <ul>
                <li>ReactJS+Flux</li>
                <li>React-router</li>
                <li>WebPack+Gulp </li>
                <li>Postgres </li>
                <li>Express/NodeJS</li>
              </ul>
            </div>
            <div className="footer">
              <div className="fine-print">
                <p>Created by @iamgeorgelee</p>
              </div>
            </div>
          </div>
    );

  }
});
