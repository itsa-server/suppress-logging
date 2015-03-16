"use strict";

var NOOP = function() {};

console._log = console.log;
console._info = console.info;
console._warn = console.warn;
console._error = console.error;
console._debug = console.debug;

module.exports = {
    log: function(enableLog) {
        console.log = enableLog ? console._log : NOOP;
        console.info = enableLog ? console._info : NOOP;
        console.warn = enableLog ? console._warn : NOOP;
        console.error = enableLog ? console._error : NOOP;
        console.debug = enableLog ? console._debug : NOOP;
    }
};