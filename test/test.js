var test = require('tape');
var fc = require('../');
var path = require('path')

test('equalityText',function(t) {
  t.plan(1);
  fc(path.join(__dirname,'a.txt'),path.join(__dirname,'b.txt'),function(isEqual) {
    t.equal(true,isEqual);
  });
});

test('inequalityText',function(t) {
  t.plan(1);
  fc(path.join(__dirname,'a.txt'),path.join(__dirname,'c.txt'),function(isEqual) {
    t.equal(false,isEqual);
  });
});
