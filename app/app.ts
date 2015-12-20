///<reference path="../typings/tsd.d.ts" />
"use strict";

angular.module("ots.services", []);

angular.module("app", ["ngRoute", "ngAnimate", "ots.services"])
    .config(function() {

        let temp: [number] = [1, 2, 3, 4];
        // use jquery
        let len = $.isArray(temp);
        // use lodash
        let sum = _.add(1, 2)
    })
    .run(function() {
        // use angular
        angular.noop();
    });


// TODO: Add stuff to the template cache
// TODO:Add moment, lodash, ng-moment, and other stuff
