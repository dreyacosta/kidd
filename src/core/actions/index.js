'use strict';

var userCommunityService = require('../model/user').userCommunityService;
var createGetMyCommunityAction = require('./getMyCommunityAction');

module.exports = {
  getMyCommunity: createGetMyCommunityAction(userCommunityService)
};
