'use strict';

angular.module('postTaskApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			});
	});
