'use strict';

var async = require('async');

function createUserCommunityService(createTwitterClient) {
  var that = {};

  function getUserCommunity(screenName, onGetUserCommunity) {
    var followers = 0;
    var followings = 0;

    var twitterClient = createTwitterClient();

    return async.waterfall([
      function getFollowers(callback) {
        return twitterClient.getFollowersIds(screenName, callback);
      },

      function setFollowers(followersIds, callback) {
        followers = followersIds;
        return callback();
      },

      function getFollowings(callback) {
        return twitterClient.getFollowingsIds(screenName, callback);
      },

      function setFollowings(followingsIds, callback) {
        followings = followingsIds;
        return callback();
      },

      function getMyCommunity(callback) {
        var userCommunity = followers.concat(followings);
        return callback(null, userCommunity);
      }
    ], function onFinish(error, userCommunity) {
      if (error) {
        console.log(new Date() + ' [ERROR] Something was wrong', error);
      } else {
        console.log(new Date() + ' [INFO] Followers:', followers.length);
        console.log(new Date() + ' [INFO] Followings:', followings.length);
        console.log(new Date() + ' [INFO] Your community:', userCommunity.length);
      }
      return onGetUserCommunity(error, userCommunity);
    });
  }

  that.getUserCommunity = getUserCommunity;

  return that;
}

module.exports = createUserCommunityService;
