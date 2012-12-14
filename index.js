var lib = require('./lib');
exports = module.exports = function(path1,path2,cbs) {
    var success = cbs.success || function() {};
    var failure = cbs.failure || function() {};

    var f1 = lib.file(path1);
    var f2 = lib.file(path2);
    lib.compare(f1,f2,function(isEqual) {
        if (isEqual) 
            success()
        else 
            failure()
    });
}
