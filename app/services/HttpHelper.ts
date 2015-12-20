/// <reference path="../../typings/tsd.d.ts" />

interface IHttpHelper {

    get: (url: string) => angular.IHttpPromise<any>;
    post: (url: string, data: any) => angular.IHttpPromise<any>;
    put: (url: string, data: any) => angular.IHttpPromise<any>;
    jsonp: (url: string) => angular.IHttpPromise<any>;
}

angular.module("app").service("HttpHelper", function($http: angular.IHttpService, $log: angular.ILogService) {
    let showErrors = (response: angular.IHttpPromiseCallbackArg<any>): void => {
        // TODO: examine response and log stack trace
        $log.info(response);
    };

    let get = (url: string) => {
        return $http.get(url);
    };

    let post = (url: string, data: any) => {
        return $http.post(url, data);
    };

    let put = (url: string, data: any) => {
        return $http.put(url, data);
    };

    let jsonp = (url: string) => {
        return $http.jsonp(url);
    };

    let fac: IHttpHelper = { get: get, post: post, put: put, jsonp: jsonp };

    return fac;
});
