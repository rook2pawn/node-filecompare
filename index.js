var lib = require('./lib');
var path = require('path')
exports = module.exports = function(path1,path2,cb) {
  var f1 = lib.file(path1);
  var f2 = lib.file(path2);
  lib.compare(f1,f2,cb);
};
