'use strict';

var nock = require('nock');
var fs = require('fs');

function recordHTTPCalls(name, options) {
  var that = {};

  options = options || {};

  var folder = options.folder || __dirname + '/fixtures';
  var hasFixtures = !process.env.NOCK_RECORD;

  if (!fs.existsSync(folder)) fs.mkdirSync(folder);

  that.before = function before() {
    if (hasFixtures) {
      nock.load(folder + '/' + name + '.json');
    } else {
      nock.restore();
      nock.recorder.rec({
        dont_print: true,
        output_objects: true
      });
    }
  };

  that.after = function after(callback) {
    if (hasFixtures) {
      callback();
    } else {
      var fixtures = nock.recorder.play();
      fs.writeFile(folder + '/' + name + '.json', JSON.stringify(fixtures), callback);
    }
  };

  return that;
}

module.exports = recordHTTPCalls;
