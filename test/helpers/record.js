'use strict';

var nock = require('nock');
var fs = require('fs');

function recordHTTPCalls(name, options) {
  options = options || {};

  var folder = options.folder || __dirname + '/fixtures';
  var hasFixtures = !process.env.NOCK_RECORD;

  if (!fs.existsSync(folder)) fs.mkdirSync(folder);

  var publicAPI = {};

  publicAPI.before = function before() {
    if (hasFixtures) {
      require(folder + '/' + name + '.js');
    } else {
      nock.recorder.rec({
        dont_print: true
      });
    }
  };

  publicAPI.after = function after(callback) {
    if (hasFixtures) {
      callback();
    } else {
      var fixtures = nock.recorder.play();
      var fixturesFile = "var nock = require('nock');\n" + fixtures.join('\n');
      fs.writeFile(folder + '/' + name + '.js', fixturesFile, callback);
    }
  };

  return publicAPI;
}

module.exports = recordHTTPCalls;
