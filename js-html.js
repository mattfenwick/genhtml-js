'use strict';

// issues:
//   no escaping/sanitizing
//   no schema checks
//   no attributes
//   no comments
//   adds extra whitespace (bad for elements like `pre`, I believe)


function Node(name, children) {
    this.name = name;
    this.children = children;
}

Node.prototype._serialize = function(lines, spaces) {
    var nextSize = spaces + ' ';
    lines.push(spaces + '<' + this.name + '>');
    for (var i = 0; i < this.children.length; i++) {
        if ( this.children[i] instanceof Node ) {
            this.children[i]._serialize(lines, nextSize);
        } else {
            lines.push(nextSize + this.children[i]);
        }
    }
    lines.push(spaces + '</' + this.name + '>');
};

Node.prototype.serialize = function() {
    var lines = [];
    this._serialize(lines, '');
    return lines.join('\n');
}

function td() {return new Node('td', Array.prototype.slice.call(arguments));}
function th() {return new Node('th', Array.prototype.slice.call(arguments));}
function tr() {return new Node('tr', Array.prototype.slice.call(arguments));}
function table() {return new Node('table', Array.prototype.slice.call(arguments));}

module.exports = {
    'Node': Node,
    'td': td,
    'th': th
};

