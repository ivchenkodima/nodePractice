function User(name){
    this.name = name;
}
User.prototype.hello = function(who) {
    console.log("Hello, "+ who.name + '!');
};


var dima = new User("Dima");
var kate = new User("Kate");

dima.hello(kate);
