var test = require('tape');
var fc = require('../');
var path = require('path')

test('test same filesize', function(t) {

  test('test for equality',function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'b.txt'),function(isEqual) {
      t.equal(true,isEqual);
    });
  });

  test('test for inequality',function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'c.txt'),function(isEqual) {
      t.equal(false,isEqual);
    });
  });

  test('ensure callback is called only once on equality', function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'b.txt'),function(isEqual) {
      t.pass("callback is called");
    });
  })

  test('ensure callback is called only once on inequality', function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'c.txt'),function(isEqual) {
      console.log("callback:", isEqual);
      t.pass("callback is called");
    });
  })

  t.end();
});



test('test different filesize', function(t) {

  test('test for inequality',function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'d.txt'),function(isEqual) {
      t.equal(false,isEqual);
    });
  });

  test('ensure callback is called only once on inequality', function(t) {
    t.plan(1);
    fc(path.join(__dirname,'a.txt'),path.join(__dirname,'d.txt'),function(isEqual) {
      console.log("callback:", isEqual);
      t.pass("callback is called");
    });
  })

  t.end();
});
