var App;
(function (App) {
    angular.module("app", ['ngRoute', 'ngAnimate'])
        .config(function () {
        var temp = 'Hello';
        var x = 'Stuff';
        var y = 'More Stuff';
    });
})(App || (App = {}));
/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Services;
    (function (Services) {
        var HttpHelper;
        (function (HttpHelper_1) {
            // TODO: figure out how to make the HttpHelper factory implement IHttpHelper
            angular.module('app').factory('HttpHelper', HttpHelper);
            function HttpHelper($http, $log) {
                var fac = { get: get, post: post, put: put, jsonp: jsonp };
                var showErrors = function (response) {
                    // TODO: examine response and log stack trace
                    console.log(response);
                };
                var get = function (url) {
                    $http.get(url).then(function (response) {
                        return response;
                    }, function (response) { showErrors(response); });
                };
                var post = function (url, data) {
                    $http.post(url, data).then(function (response) {
                        return response;
                    }, function (response) { showErrors(response); });
                };
                var put = function (url, data) {
                    $http.put(url, data).then(function (response) {
                        return response;
                    }, function (response) { showErrors(response); });
                };
                var jsonp = function (url) {
                    return $http.jsonp(url).then(function (response) {
                        return response;
                    }, function (response) { showErrors(response); });
                    return fac;
                };
            }
        })(HttpHelper = Services.HttpHelper || (Services.HttpHelper = {}));
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Services;
    (function (Services) {
        var SupportService;
        (function (SupportService) {
            angular.module('app').factory('SupportService', function (HttpHelper) {
                var fac = {};
                return fac;
            });
        })(SupportService = Services.SupportService || (Services.SupportService = {}));
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var SupportController;
        (function (SupportController) {
            angular.module('app')
                .controller('SupportController', function (SupportService) {
                var vm = this;
            });
        })(SupportController = Controllers.SupportController || (Controllers.SupportController = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=build.js.map