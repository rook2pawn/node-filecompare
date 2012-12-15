var test = require('tap').test;
var fc = require('../');

test('equalityText',function(t) {
    t.plan(1);
    fc('a.txt','b.txt',function(isEqual) {
        t.equal(true,isEqual);
    });
});

test('inequalityText',function(t) {
    t.plan(1);
    fc('a.txt','c.txt',function(isEqual) {
        t.equal(false,isEqual);
    });
});
