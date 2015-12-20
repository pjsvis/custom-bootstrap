///<reference path="../typings/tsd.d.ts" />
"use strict";
require("angular");
require("angular-animate");
require("angular-ui-router");
angular.module("app", ["ngRoute", "ngAnimate"])
    .config(function () {
    var temp = [1, 2, 3, 4];
    // use jquery
    var len = $.isArray(temp);
    // use lodash
    var sum = _.add(1, 2);
})
    .run(function () {
    // use angular
    angular.noop();
});
// TODO: Add stuff to the template cache
// TODO:Add moment, lodash, ng-moment, and other stuff
