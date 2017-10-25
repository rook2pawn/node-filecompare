[![Build Status](https://travis-ci.org/rook2pawn/node-filecompare.svg?branch=master)](https://travis-ci.org/rook2pawn/node-filecompare)
[Project Git Url](https://github.com/rook2pawn/node-filecompare/)

# filecompare
    
Asynchronous file compare.

# Example


    var fc = require('filecompare');
    var cb = function(isEqual) {
      console.log("equal? :" + isEqual);
    }
    fc(path1,path1,cb);
    
# install (linux)

    apt-get install build-essential // you need Make, g++ for BufferTools
    npm install

# Features

* perfect for high stress systems
* works with binary data
* perfect for comparing very large files

# Why is this useful? 

Bytes are read into a small buffer, then compared. 

Each step is independently asynchronous yet only steps forward after confirming
buffers are identical. 

This means if there is an unforseen process spike from some other processes, the file compare will exscuse itself until CPU load becomes more available. This means you can compare arbitrarily sized multi-gigabyte files all the time without worry about locking up the computer.

# Tests

    npm test

# Notes

In the test/test.js you will see I use path.join(__dirname,'myfile.txt'), but that won't be necessary for your project. Just supply the filenames relative to your script directory, example: 


myfile.js

    var fc = require('filecompare')
    fc('a.txt','foo/b.txt',function(isEqual) {
      console.log("isEqual?: " ,isEqual)
    })

Where a.txt resides alongside in the same directory as myfile.js and b.txt resides in a directory "foo" 

    a.txt
    myfile.js
    foo
     \__b.txt
