///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/lodash/lodash.d.ts" />
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="../typings/angularjs/angular-route.d.ts" />
///<reference path="../typings/angularjs/angular-animate.d.ts" />
///<reference path="../typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
///<reference path="../typings/angular-idle/angular-idle" />

import jquery = require('jquery');
import _ = require('lodash');
import angular = require('angular');
import route = require('angular-route');
import animate = require('angular-animate');
//import uibs = require('c:/dev/custom-bootstrap/node_modules/angular-ui-bootstrap/ui-bootstrap-tpls.js');

'use strict'
module App {
	
	angular.module("app", ['ngRoute', 'ngAnimate'])
		.config(function() {

			var temp: [number] = [1, 2, 3, 4];
			// use jquery
			var len = $.isArray(temp);
			// use lodash
			var sum = _.add(1, 2)
		})
		.run(function() {
			// use angular
			angular.noop();
		})
}

// TODO: Add stuff to the template cache
// TODO:Add moment, lodash, ng-moment, and other stuff
