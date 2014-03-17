'use strict';

var model = require('./model.js');


function tag(name) {
    return function(attrs /* children */) {
        var wrapped_attrs = Object.keys(attrs).map(function(a) {
            return new model.Attribute(a, attrs[a]);
        });
        var children = Array.prototype.slice.call(arguments, 1);
        var kids = children.map(function(c) {
            if ( typeof c === 'string' ) { return new model.Text(c);}
            return c;
        });
        return new model.Element(name, wrapped_attrs, kids);
    }
}

function root(dtype /* children */) {
    // do we allow strings as children of root?  let's assume no for now
    return new model.Root(dtype, Array.prototype.slice.call(arguments, 1));
}


module.exports = {
    'root'    : root,
    'comment' : function(text) {return new model.Comment(text);},
    'html'  : tag('html'),
    'body'  : tag('body'),
    'head'  : tag('head'),
    'div'   : tag('div'),
    'td'    : tag('td'),
    'th'    : tag('th'),
    'tr'    : tag('tr'),
    'table' : tag('table')
};

