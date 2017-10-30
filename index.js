const promiseCompare = require('./lib/compare-promises.js');
const streamCompare = require('./lib/compare-streams.js');
const lib = require('./lib');


const comparePromises = function (path1,path2,cb,step,bufferSize) {

  console.log("using comparePromises")
  step = step || 8192;
  bufferSize = bufferSize || 8192;

  var f1 = lib.fileBufferObject(path1,bufferSize);
  var f2 = lib.fileBufferObject(path2,bufferSize);
  return promiseCompare.compare(f1,f2,cb,step,bufferSize);
};


const compareStreams = function (path1,path2,cb) {
  console.log("using compareStreams");

  return streamCompare.compare(path1,path2,cb); 
};


//exports = module.exports = comparePromises;
exports = module.exports = function() {
  const args = Array.from(arguments);
  console.log("GOT ARGS:", args);

  if (!args) 
    return;
  if (typeof args[0] == 'object') {
    let params = args[0];    
    var { type, path1, path2, cb, step, bufferSize } = params;
  } else {
    var path1 = args[0];
    var path2 = args[1];
    var cb = args[2];
    var step = args[3];
    var bufferSize = args[4];
  }
  type = type || 'promises'; // or 'streams'

  lib.checkFiles([path1,path2],function(err, file1, file2) {
    if (err) {
      console.log(err);
      process.exitCode = 1;
    }

    const type = useStream ? 'streams' : 'promises'; 
    compare({type:type, path1:file1, path2: file2, cb : function(isEqual) {
      console.log("isEqual?",isEqual);
      process.exitCode = 0;
    }});
  })

  // TODO checkFiles has to be promise so we can catch and return early


  if (type == 'promises') {
    compare = comparePromises;
  } else if (type == 'streams') {
    compare = compareStreams;
  }
  return compare(path1,path2,cb,step,bufferSize);
}
