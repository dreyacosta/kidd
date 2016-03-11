'use strict';

var assert = require('assert');
var record = require('./helpers/record');

var createTwitterClient = require('../src/core/infrastructure/twitterClient');
var twitterClient = createTwitterClient();

var communityRecord = record('twitterClient', {
  folder: __dirname + '/fixtures'
});

describe('Infrastructure - Twitter client', function() {
  before(communityRecord.before);

  it('should get user followers ids', function(done) {
    function onGetFollowersIds(error, ids) {
      assert.equal(ids.length, 1154);
      return done(error);
    }

    return twitterClient.getFollowersIds('dreyacosta', onGetFollowersIds);
  });

  it('should get user followings ids', function(done) {
    function onGetFollowingsIds(error, ids) {
      assert.equal(ids.length, 156);
      return done(error);
    }

    return twitterClient.getFollowingsIds('dreyacosta', onGetFollowingsIds);
  });

  after(communityRecord.after);
});
