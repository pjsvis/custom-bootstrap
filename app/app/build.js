///<reference path="../typings/tsd.d.ts" />
// import uibs = require("c:/dev/custom-bootstrap/node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.js");
"use strict";
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
var app;
(function (app) {
    var NavigationController = (function () {
        function NavigationController() {
        }
        return NavigationController;
    })();
    app.NavigationController = NavigationController;
})(app || (app = {}));
/// <reference path="../../typings/tsd.d.ts" />
var app;
(function (app) {
    angular.module("app").service("HttpHelper", function ($http, $log) {
        var showErrors = function (response) {
            // TODO: examine response and log stack trace
            $log.info(response);
        };
        var get = function (url) {
            return $http.get(url);
        };
        var post = function (url, data) {
            return $http.post(url, data);
        };
        var put = function (url, data) {
            return $http.put(url, data);
        };
        var jsonp = function (url) {
            return $http.jsonp(url);
        };
        var fac = { get: get, post: post, put: put, jsonp: jsonp };
        return fac;
    });
})(app || (app = {}));
///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../services/HttpHelper.ts"/>
var app;
(function (app) {
    angular.module("app").factory("SupportService", function (HttpHelper) {
        return {
            getStuff: function () { return HttpHelper.get("Stuff"); }
        };
    });
    angular.module("app")
        .controller("SupportController", function (SupportService) {
        var vm = this;
        SupportService.getStuff().then(function (response) {
            var data = response.data;
        });
    });
})(app || (app = {}));
