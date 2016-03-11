'use strict';

var CONFIG = require('../../config');
var Twitter = require('ntwitter');

function createTwitterClient(tokens) {
  var that = {};

  tokens = tokens || CONFIG.test.twitter_tokens;

  var twitterClient = new Twitter(tokens);

  function getFollowersIds(screenName, onGetFollowerIds) {
    return twitterClient.getFollowersIds(screenName, onGetFollowerIds);
  }

  function getFollowingsIds(screenName, onGetFollowingsIds) {
    return twitterClient.getFriendsIds(screenName, onGetFollowingsIds);
  }

  that.getFollowersIds = getFollowersIds;
  that.getFollowingsIds = getFollowingsIds;

  return that;
}

module.exports = createTwitterClient;
