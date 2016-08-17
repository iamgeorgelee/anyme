'use strict';
import './user-families.less';

import React from 'react';
import Bootstrap from 'react-bootstrap';
import uuid from 'node-uuid';
import UserFamilyStore from '../../flux/stores/user-family-store';
import UserFamiliesActions from '../../flux/actions/user-families-actions';
import ActionTypes from '../../flux/constants/action-types';

export default React.createClass({

  getInitialState: function() {
    return {
      families: []
    };
  },

  componentDidMount: function() {

    UserItemStore.on(ActionTypes.GET_USER_ITEMS_RES, this.refreshItems);
    UserItemsActions.getUserItems();
  },

  refreshItems: function(){
    this.setState({
      families:UserItemStore.getUserItems()
    });
  },

  addItem: function(){
    UserItemsActions.addItem('Title ' + this.getRandomString(), 'Description ' + this.getRandomString());
  },

  getRandomString: function(){
    return uuid.v4().substring(0, 7);
  },

  renderFamilies: function(){

    var families = <div></div>;



    if(this.state.families){
      families = this.state.families.map(function (families) {
            return (
              <div className="item">
                <h1>{item.title}</h1>
                <p>Created: {item.created}</p>
                <h2>{item.description}</h2>
              </div>
            );
          });
    }

    return (
      <div className="families">
        {families}
      </div>
    );
  },

  render: function() {

    var items = this.renderFamilies();

    return (
      <div className="user-families">

        <div className="row">
          {items}
        </div>

      </div>
    );

  }
});
