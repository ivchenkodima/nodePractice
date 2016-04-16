var db = require('db');
var log = require('logger')(module);
var User = require('./user/index');


function run() {
    var dima = new User("Dima");
    var kate = new User("Kate");

    dima.hello(kate);
    log(db.getPhrase("Run successful"));
}
// console.log(module.parent);
if(module.parent) {
    exports.run = run;
}else {
    run();
}

 
