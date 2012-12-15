    var fc = require('filecompare');
    var cb = function(isEqual) {
        console.log("equal? :" + isEqual);
    }
    fc(path1,path1,cb);
    

filecompare
===========
    
Asynchronous file compare.

Features
========

* perfect for high stress systems
* works with binary data
* perfect for comparing very large files

Why is this useful? 
===================

Bytes are read into a small buffer, then compared. 

Each step is independently asynchronous yet only steps forward after confirming
buffers are identical. 

This means if there is an unforseen process spike from some other processes, the file compare will exscuse itself until CPU load becomes more available. This means you can compare arbitrarily sized multi-gigabyte files all the time without worry about locking up the computer.

Tests
=====

    tap test/
