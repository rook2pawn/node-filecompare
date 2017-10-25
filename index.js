const lib = require('./lib');
const path = require('path');

const compare = function (path1,path2,cb) {

  var f1 = lib.fileBufferObject(path1);
  var f2 = lib.fileBufferObject(path2);
  lib.compare(f1,f2,cb);
};

exports = module.exports = compare;
