const fs = require('fs');
const assert = require('assert');

const fileBufferObject = function(path, bufferSize) {
    var fd = fs.openSync(path,'r');
    var b = Buffer.alloc(bufferSize);
    return {fd:fd,b:b,pos:0,size:fs.statSync(path).size};
}
exports.fileBufferObject = fileBufferObject;

const checkFiles = function(list, cb) {
  if ((!list.length) || (list.length != 2)) {
    cb("File list not valid");
  }
  try {

    fs.accessSync(list[0]);
    fs.accessSync(list[1]);

  } catch (e) {
    return cb(e);
  }
  return cb(null,list[0],list[1]);
};
exports.checkFiles = checkFiles;