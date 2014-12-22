'use strict';

var vsprintf = require('sprintf-js').vsprintf;
var jaunt = require('jaunt');

var strfmt = function(tmpl) {

  var i;
  var keys = [];
  var compiled = tmpl.replace(/{\s*([^}]+?)\s*}/g, function(match, key) {
    key = key.trim();
    i = key.indexOf(':');
    if (i === -1) { // no format specifier, default to %s
      keys.push(key);
      return '%s';
    }
    keys.push(key.substring(0, i).trim());
    return key.substring(i+1).trim();
  });
  var len = keys.length;
  var val;
  var vals;

  return function(data) {
    vals = [];
    i = -1;
    while (++i < len) {
      val = jaunt.get(data, keys[i]);
      if (typeof val === 'undefined') {
        throw new Error('No key "' + keys[i] + '" in data');
      }
      vals.push(val);
    }
    return vsprintf(compiled, vals);
  };

};

module.exports = exports = strfmt;
