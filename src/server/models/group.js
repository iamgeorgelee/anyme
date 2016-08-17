'use strict'

import User from './user.js';
import Item from './item.js';

function Group() {

  this._id = '';
  this.host = new User();
  this.title = '';
  this.description = '';
  this.created = null;
  this.member = [];
  this.item = [];
}

module.exports = Group;