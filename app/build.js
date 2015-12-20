///<reference path="../typings/tsd.d.ts" />
"use strict";
angular.module("ots.services", []);
angular.module("app", ["ngRoute", "ngAnimate", "ots.services"])
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
/// <reference path="../../typings/tsd.d.ts" />
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
///<reference path="../../typings/tsd.d.ts"/>
///<reference path="../services/HttpHelper.ts"/>
"use strict";
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
