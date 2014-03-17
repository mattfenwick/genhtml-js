'use strict';


var legal_names = /^[a-zA-Z]+$/;

function Element(name, attrs, children) {
    if ( (name.length > 0) && 
         (typeof name === 'string') &&
          legal_names.test(name) ) {
        this.name = name;
    } else {
        throw new Error('illegal element name -- ' + name);
    }
    this.children = children;
    var attr_map = {};
    attrs.map(function(a) {
        if ( attr_map.hasOwnProperty(a.key) ) {
            throw new Error('duplicate attribute -- ' + a.key);
        }
        attr_map[a.key] = 1;
    });
    this.attrs = attrs;
}


function Comment(text) {
    if ( text.indexOf('--') < 0 ) {
        throw new Error('illegal text in comment -- ' + text);
    }
    this.text = text;
}


function Root(doctype, children) {
    this.doctype = doctype;
    this.children = children;
}


function Attribute(name, value) {
    if ( (name.length > 0) && 
         (typeof name === 'string') &&
          legal_names.test(name) ) {
        this.name = name;
    } else {
        throw new Error('illegal name -- ' + name);
    }
    this.value = value; // anything?  can even be empty?
}


function Text(value) {
    this.text = text; // anything?
}


module.exports = {
    'Element'  :  Element  ,
    'Comment'  :  Comment  ,
    'Root'     :  Root     ,
    'Attribute':  Attribute,
    'Text'     :  Text
};

