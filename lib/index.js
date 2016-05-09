var fs = require('fs');
require('buffertools').extend();
var step = 1024;
var file = function(path) {
    var fd = fs.openSync(path,'r');
    var b = new Buffer(4096);
    return {fd:fd,b:b,pos:0,size:fs.statSync(path).size};
}
exports.file = file

var h1 = function(err,bytesRead,buffer) {
  if (bytesRead > 0)  {
    this.f1.pos += bytesRead;
    var that = {f1:this.f1,f2:this.f2,cb:this.cb};
    fs.read(this.f2.fd,this.f2.b, 0 ,step,this.f2.pos,h2.bind(that));
  }
};

var h2 = function(err,bytesRead,buffer) {
  if (bytesRead > 0) {
    this.f2.pos += bytesRead;
    var diff = this.f1.pos - this.f2.pos;
    if (diff < 0) {
      fs.readSync(this.f1.fd,this.f1.b, 0 ,Math.abs(diff),this.f1.pos);   
      this.f1.pos += Math.abs(diff);
    } else if (diff > 0) {
      fs.readSync(this.f2.fd,this.f2.b, 0 ,diff, this.f2.pos);   
      this.f2.pos += diff;
      bytesRead += diff;
    }
    var s1 = this.f1.b.slice(0, bytesRead);
    var s2 = this.f2.b.slice(0, bytesRead);
    var isEqual = s1.equals(s2);
    if (isEqual === false) {
      fs.closeSync(this.f1.fd)
      fs.closeSync(this.f2.fd)
      this.cb(false);
      return
    }
    if (this.f2.pos < this.f2.size) {
      var that = {f1:this.f1,f2:this.f2,cb:this.cb};
      fs.read(this.f1.fd, this.f1.b, 0, step, this.f1.pos, h1.bind(that));
    } else {
      fs.closeSync(this.f1.fd)
      fs.closeSync(this.f2.fd)
      this.cb(true);
    }
  }
};

exports.compare = function(f1,f2,cb) {
  if (f1.size !== f2.size) {
    cb(false);
  } else {
    var isEqual = true;
    var that = {f1:f1,f2:f2,cb:cb};
    fs.read(f1.fd, f1.b, 0, step, f1.pos, h1.bind(that));
  }
}
