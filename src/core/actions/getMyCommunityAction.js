'use strict';

function createGetMyCommunityAction(userCommunityService) {
  var that = {};

  function getMyCommunity(screenName, onGetMyCommunity) {
    return userCommunityService.getUserCommunity(screenName, onGetMyCommunity);
  }

  that.getMyCommunity = getMyCommunity;

  return that;
}

module.exports = createGetMyCommunityAction;
