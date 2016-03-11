'use strict';

var assert = require('assert');
var record = require('./helpers/record');

var getMyCommunityAction = require('../src/core/actions').getMyCommunity;

var communityRecord = record('getMyCommunityAction', {
  folder: __dirname + '/fixtures'
});

describe('Action - getMyCommunity', function() {
  before(communityRecord.before);

  it('should calculate the user Twitter community', function(done) {
    function onGetMyCommunity(error, ids) {
      assert.equal(ids.length, 1310);
      return done(error);
    }

    return getMyCommunityAction.getMyCommunity('dreyacosta', onGetMyCommunity);
  });

  after(communityRecord.after);
});
