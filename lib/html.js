'use strict';

var model = require('./model.js');

var Element = model.Element;

function tag(name) {
    return function(attrs, children) {
        return new Element(name, attrs, children);
    }
}


var td = tag('td'),
    th = tag('th'),
    tr = tag('tr'),
    table = tag('table');


module.exports = {
    'td':  td,
    'th':  th,
    'tr':  tr,
    'table': table
};

