var phrases;

exports.connect = function () {
    phrases = require('./ru');
};
exports.getPhrase = function(name) {
    if(!phrases[name]){
        return new Error("No such frase" + name);
    }
    return phrases[name];

};