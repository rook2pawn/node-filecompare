var fc = require('../');

fc('a.txt','b.txt',{
    success:function() {
        console.log("Equals.");
    },
    failure:function() {
        console.log("not equals.");
    }
});
