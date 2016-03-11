'use strict';

var assert = require('assert');
var record = require('./helpers/record');

var createTwitterClient = require('../src/core/infrastructure/twitterClient');
var createUserCommunityService = require('../src/core/model/user/userCommunityService');
var userCommunityService = createUserCommunityService(createTwitterClient);

var communityRecord = record('userCommunityService', {
  folder: __dirname + '/fixtures'
});

describe('Model user - userCommunityService', function() {
  before(communityRecord.before);

  it('should calculate the user Twitter community', function(done) {
    function onGetUserCommunity(error, ids) {
      assert.equal(ids.length, 1310);
      return done(error);
    }

    return userCommunityService.getUserCommunity('dreyacosta', onGetUserCommunity);
  });

  after(communityRecord.after);
});
