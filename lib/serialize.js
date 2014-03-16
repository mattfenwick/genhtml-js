'use strict';

var model = require('./model.js');


function _serialize(node, lines, spaces) {
    var nextSize = spaces + ' ',
        i,
        child;
    lines.push(spaces + '<' + node.name + '>');
    for (i = 0; i < node.children.length; i++) {
        child = node.children[i];
        if ( child instanceof model.Node ) {
            _serialize(child, lines, nextSize);
        } else {
            lines.push(nextSize + child);
        }
    }
    lines.push(spaces + '</' + node.name + '>');
};

function serialize(node) {
    var lines = [];
    _serialize(node, lines, '');
    return lines.join('\n');
}


module.exports = {
    'serialize': serialize
};

