module App.Services.SupportService {
	import HttpHelper = App.Services.HttpHelper

	angular.module('app').factory('SupportService', function(HttpHelper: HttpHelper.IHttpHelper) {
		var fac = {};

		return fac;
	})
}

module App.Controllers.SupportController {
	angular.module('app')
		.controller('SupportController', function(SupportService) {
			var vm = this;
		})
}