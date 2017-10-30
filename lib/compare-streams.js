const fs = require('fs');
const streamEqual = require('stream-equal');

var doCompare = function(f1, f2, cb) {

  var s1 = fs.createReadStream(f1);
  var s2 = fs.createReadStream(f2);
  streamEqual(s1,s2, (err, equal) => {
    return cb(equal);
  });
};

exports.compare = doCompare;
