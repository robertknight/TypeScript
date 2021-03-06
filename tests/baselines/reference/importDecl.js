//// [tests/cases/compiler/importDecl.ts] ////

//// [importDecl_require.ts]
export class d {
    foo: string;
}
export var x: d;
export function foo(): d { return null; }

//// [importDecl_require1.ts]
export class d {
    bar: string;
}
var x: d;
export function foo(): d { return null; }

//// [importDecl_require2.ts]
export class d {
    baz: string;
}
export var x: d;
export function foo(): d { return null; }

//// [importDecl_require3.ts]
export class d {
    bing: string;
}
export var x: d;
export function foo(): d { return null; }

//// [importDecl_require4.ts]
import m4 = require("importDecl_require");
export function foo2(): m4.d { return null; }

//// [importDecl_1.ts]
///<reference path='importDecl_require.ts'/>
///<reference path='importDecl_require1.ts'/>
///<reference path='importDecl_require2.ts'/>
///<reference path='importDecl_require3.ts'/>
///<reference path='importDecl_require4.ts'/>
import m4 = require("importDecl_require"); // Emit used
export var x4 = m4.x;
export var d4 = m4.d;
export var f4 = m4.foo();

export module m1 {
    export var x2 = m4.x;
    export var d2 = m4.d;
    export var f2 = m4.foo();

    var x3 = m4.x;
    var d3 = m4.d;
    var f3 = m4.foo();
}

//Emit global only usage
import glo_m4 = require("importDecl_require1");
export var useGlo_m4_x4 = glo_m4.x;
export var useGlo_m4_d4 = glo_m4.d;
export var useGlo_m4_f4 = glo_m4.foo();

//Emit even when used just in function type
import fncOnly_m4 = require("importDecl_require2");
export var useFncOnly_m4_f4 = fncOnly_m4.foo();

// only used privately no need to emit
import private_m4 = require("importDecl_require3");
export module usePrivate_m4_m1 {
    var x3 = private_m4.x;
    var d3 = private_m4.d;
    var f3 = private_m4.foo();
}

// Do not emit unused import
import m5 = require("importDecl_require4");
export var d = m5.foo2();

// Do not emit multiple used import statements
import multiImport_m4 = require("importDecl_require"); // Emit used
export var useMultiImport_m4_x4 = multiImport_m4.x;
export var useMultiImport_m4_d4 = multiImport_m4.d;
export var useMultiImport_m4_f4 = multiImport_m4.foo();


//// [importDecl_require.js]
var d = (function () {
    function d() {
    }
    return d;
})();
exports.d = d;
exports.x;
function foo() {
    return null;
}
exports.foo = foo;
//// [importDecl_require1.js]
var d = (function () {
    function d() {
    }
    return d;
})();
exports.d = d;
var x;
function foo() {
    return null;
}
exports.foo = foo;
//// [importDecl_require2.js]
var d = (function () {
    function d() {
    }
    return d;
})();
exports.d = d;
exports.x;
function foo() {
    return null;
}
exports.foo = foo;
//// [importDecl_require3.js]
var d = (function () {
    function d() {
    }
    return d;
})();
exports.d = d;
exports.x;
function foo() {
    return null;
}
exports.foo = foo;
//// [importDecl_require4.js]
function foo2() {
    return null;
}
exports.foo2 = foo2;
//// [importDecl_1.js]
var m4 = require("importDecl_require");
exports.x4 = m4.x;
exports.d4 = m4.d;
exports.f4 = m4.foo();
(function (m1) {
    m1.x2 = m4.x;
    m1.d2 = m4.d;
    m1.f2 = m4.foo();
    var x3 = m4.x;
    var d3 = m4.d;
    var f3 = m4.foo();
})(exports.m1 || (exports.m1 = {}));
var m1 = exports.m1;
var glo_m4 = require("importDecl_require1");
exports.useGlo_m4_x4 = glo_m4.x;
exports.useGlo_m4_d4 = glo_m4.d;
exports.useGlo_m4_f4 = glo_m4.foo();
var fncOnly_m4 = require("importDecl_require2");
exports.useFncOnly_m4_f4 = fncOnly_m4.foo();
var private_m4 = require("importDecl_require3");
(function (usePrivate_m4_m1) {
    var x3 = private_m4.x;
    var d3 = private_m4.d;
    var f3 = private_m4.foo();
})(exports.usePrivate_m4_m1 || (exports.usePrivate_m4_m1 = {}));
var usePrivate_m4_m1 = exports.usePrivate_m4_m1;
var m5 = require("importDecl_require4");
exports.d = m5.foo2();
var multiImport_m4 = require("importDecl_require");
exports.useMultiImport_m4_x4 = multiImport_m4.x;
exports.useMultiImport_m4_d4 = multiImport_m4.d;
exports.useMultiImport_m4_f4 = multiImport_m4.foo();
