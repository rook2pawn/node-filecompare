const lib = require('./lib');
const path = require('path');

const compare = function (path1,path2,cb,step,bufferSize) {

  step = step || 1;
  bufferSize = bufferSize || 13;

  var f1 = lib.fileBufferObject(path1,bufferSize);
  var f2 = lib.fileBufferObject(path2,bufferSize);
  console.log(f1,f2);
  return lib.compare(f1,f2,cb,step,bufferSize);
};

exports = module.exports = compare;
