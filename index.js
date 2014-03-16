var modules = ['html', 'model', 'serialize'];

var obj = {};
modules.map(function(n) {
    obj[n] = require('./lib/' + n + '.js');
});

module.exports = obj;

