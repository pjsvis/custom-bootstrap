/// <reference path="../../typings/tsd.d.ts" />
var angular = require("angular");
var App;
(function (App) {
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
})(App || (App = {}));
