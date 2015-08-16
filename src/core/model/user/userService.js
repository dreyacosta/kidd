'use strict';

var userService = {};

userService.calculateMyCommunity = function calculateMyCommunity(followers, followings) {
  return followers + followings;
};

module.exports = userService;
