'use strict';

var createTwitterClient = require('../../infrastructure/twitterClient');
var createUserCommunityService = require('./userCommunityService');

module.exports = {
  userCommunityService: createUserCommunityService(createTwitterClient)
};
