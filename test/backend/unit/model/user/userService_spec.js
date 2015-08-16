'use strict';

var assert = require('assert');
var userService = require('../../../../../src/core/model/user/userService');

describe('Calculate my Twitter community', function() {
  it('should calcula 1500 members (1250 followers + 250 followings', function() {
    var followers = 1250;
    var followings = 250;
    var myCommunity = userService.calculateMyCommunity(followers, followings);
    assert.equal(myCommunity, 1500);
  });

  it('should calcula 1500 members (1723 followers + 2039 followings', function() {
    var followers = 1723;
    var followings = 2039;
    var myCommunity = userService.calculateMyCommunity(followers, followings);
    assert.equal(myCommunity, 3762);
  });
});
