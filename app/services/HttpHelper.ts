/// <reference path="../../typings/tsd.d.ts" />
module App.Services.HttpHelper {

	export interface IHttpHelper {
		get: (url: string) => ng.IHttpPromise<any>;
		post: (url: string, data: any) => ng.IHttpPromise<any>;
		put: (url: string, data: any) => ng.IHttpPromise<any>;
		delete: (url: string, data: any) => ng.IHttpPromise<any>;
		jsonp: (url: string) => ng.IHttpPromise<any>;
	}
	// TODO: figure out how to make the HttpHelper factory implement IHttpHelper
	angular.module('app').factory('HttpHelper', HttpHelper)

	function HttpHelper($http, $log) {

		var fac = { get: get, post: post, put: put, jsonp: jsonp };

		var showErrors = (response: ng.IPromise<any>): void => {
			// TODO: examine response and log stack trace
			console.log(response)
		}

		var get = function(url: string) {
			$http.get(url).then(
				function(response) {
					return response;
				}, function(response) { showErrors(response) }
			);
		}

		var post = function(url: string, data: any) {
			$http.post(url, data).then(
				function(response) {
					return response;
				}, function(response) { showErrors(response) }
			);
		}

		var put = function(url: string, data: any) {
			$http.put(url, data).then(
				function(response) {
					return response;
				}, function(response) { showErrors(response) }
			);
		}

		var jsonp = function(url: string) {
			return $http.jsonp(url).then(function(response) {
				return response;
			}, function(response) { showErrors(response) })

			return fac;
		}
	}
}