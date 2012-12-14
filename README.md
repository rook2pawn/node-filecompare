    var fc = require('filecompare');
    var cb = function(isEqual) {
        console.log("equal? :" + isEqual);
    }
    fc(path1,path1,cb);
    

filecompare
===========
    
Asynchronous file compare
