///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/lodash/lodash.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="../typings/angularjs/angular-route.d.ts" />
///<reference path="../typings/angularjs/angular-animate.d.ts" />
///<reference path="../typings/angularjs/angular-route.d.ts" />
/*
// ui-bootstrap causes errors

*/
///<reference path="../typings/angular-idle/angular-idle" />
'use strict';
var App;
(function (App) {
    angular.module("app", [])
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
})(App || (App = {}));
// TODO: Add stuff to the template cache
// TODO:Add moment, lodash, ng-moment, and other stuff
