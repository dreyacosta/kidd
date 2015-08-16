'use strict';

var assert = require('assert');
var record = require('../../../../helpers/record');
var fetchMyCommunity = require('../../../../../src/core/actions/community/fetchMyCommunity');

var communityRecord = record('community', {
  folder: __dirname + '/fixtures'
});

describe('Fetch my community', function() {
  before(communityRecord.before);

  it('should get my Twitter community', function(done) {
    function onFetchMyCommunity(error, myCommunity) {
      assert.equal(myCommunity, 1344);
      return done(error);
    }

    return fetchMyCommunity('dreyacosta', onFetchMyCommunity);
  });

  after(communityRecord.after);
});
