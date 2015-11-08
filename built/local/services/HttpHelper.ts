/// <reference path="../../typings/tsd.d.ts" />
module App.Services.HttpHelper {

	export interface IHttpHelper {
		get: (url: string) => angular.IHttpPromise<any>;
		post: (url: string, data: any) => angular.IHttpPromise<any>;
		put: (url: string, data: any) => angular.IHttpPromise<any>;
		jsonp: (url: string) => angular.IHttpPromise<any>;
		//delete: (url: string, data: any) => ng.IHttpPromise<any>;		
	}
	// TODO: figure out how to make the HttpHelper factory implement IHttpHelper
	angular.module('app').factory('HttpHelper', HttpHelper)

	var HttpHelper = ($http, $log) => {

		var fac = { get: get, post: post, put: put, jsonp: jsonp };

		var showErrors = (response: ng.IPromise<any>): void => {
			// TODO: examine response and log stack trace
			$log(response)
		}

		var get = (url: string) => {
			$http.get(url).then(response => { return response; }
				, response => { showErrors(response); return response; }
			);
		}

		var post = (url: string, data: any) => {
			$http.post(url, data).then(response => { return response; }
				, (response) => { showErrors(response); return response; }
			);
		}

		var put = (url: string, data: any) => {
			$http.put(url, data).then(
				response => { return response; }
				, (response) => { showErrors(response); return response; }
			);
		}

		var jsonp = (url: string) => {
			return $http.jsonp(url).then(response => { response }
				, (response) => { showErrors(response); return response; }
			);
		}

		// TODO: delete is a reserved word???
		// var delete = (url: string, data: any) => {
		// 	$http.delete(url, data).then(
		// 		response => { return response; }
		// 		, (response) => { showErrors(response); return response; }
		// 	);
		// }
		
		return fac;
	}
}
