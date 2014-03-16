'use strict';

var model = require('./model.js');

var Node = model.Node;


function td(children) {
    return new Node('td', {}, children);
}

function th(children) {
    return new Node('th', {}, children);
}

function tr(children) {
    return new Node('tr', {}, children);
}

function table(children) {
    return new Node('table', {}, children);
}


module.exports = {
    'td':  td,
    'th':  th,
    'tr':  tr,
    'table': table
};

