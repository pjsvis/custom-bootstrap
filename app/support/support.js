///<reference path="../../typings/tsd.d.ts"/>
"use strict";
require("HttpHelper");
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
