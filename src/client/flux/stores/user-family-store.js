'use strict';

import React from 'react';
import assign from 'react/lib/Object.assign';
import _ from 'lodash';
import Events from 'events';

import Dispatcher from '../core/dispatcher';
import ActionTypes from '../constants/action-types';
import User from '../models/user';
import Family from '../models/family';

var EventEmitter = Events.EventEmitter;
var _userFamilies = [];

// Public Getters
const UserFamilyStore = assign({}, EventEmitter.prototype, {

  getUserFamilies: function() {
    return _userFamilies;
  }

});

//Store callback
const DispatcherCallBack = function (payload) {
  var action = payload.action;

  switch (action.actionType) {

    case ActionTypes.ADD_FAMILY_RES:
        var addedFamily = action.data;
        if(addedFamily){
          UserFamilyStore.emit(ActionTypes.ADD_FAMILY_RES);
        } else {
          UserFamilyStore.emit(ActionTypes.ADD_FAMILY_ERR);
        }

        break;
    case ActionTypes.GET_USER_FAMILY_RES:
        var families = action.data;
        if(families){

          _userfamilies = families.map(function(familyRes){
            var family = new UserFamily();
            family.title = familyRes.title;
            family.description = familyRes.description;
            family.created = familyRes.created;
            return family;
          });

          UserFamilyStore.emit(ActionTypes.GET_USER_FAMILIES_RES);
        } else {
          UserFamilyStore.emit(ActionTypes.GET_USER_FAMILIES_ERR);
        }

        break;
    default:
      // Do nothing
  }
};


UserFamilyStore.dispatcherToken = Dispatcher.register(DispatcherCallBack);

module.exports = UserFamilyStore;
