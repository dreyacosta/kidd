'use strict';

var async = require('async');
var Twitter = require('ntwitter');
var CONFIG = require('../../../config');
var calculateMyCommunity = require('../../infrastructure/services/calculateMyCommunity');

var twit = new Twitter(CONFIG.test.twitter_tokens);

function fetchMyCommunity(screenName, callback) {
  var followers = 0;
  var followings = 0;
  var myCommunity = 0;

  async.waterfall([
    function getFollowers(callback) {
      return twit.getFollowersIds(screenName, callback);
    },

    function setFollowers(followersIds, callback) {
      followers = followersIds.length;
      return callback();
    },

    function getFollowings(callback) {
      return twit.getFriendsIds(screenName, callback);
    },

    function setFollowings(followingsIds, callback) {
      followings = followingsIds.length;
      return callback();
    },

    function getMyCommunity(callback) {
      myCommunity = calculateMyCommunity(followers, followings);
      return callback();
    }
  ], function onFinish(error) {
    if (error) {
      console.log(new Date() + ' [ERROR] Something was wrong', error);
    } else {
      console.log(new Date() + ' [INFO] Followers:', followers);
      console.log(new Date() + ' [INFO] Followings:', followings);
      console.log(new Date() + ' [INFO] Your community:', myCommunity);
    }
    return callback(error, myCommunity);
  });
}

module.exports = fetchMyCommunity;
