'use strict';

angular.module('postTaskApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('newQuestion', {
				url: '/questions/new',
				templateUrl: 'app/newQuestion/newQuestion.html',
				controller: 'NewQuestionCtrl'
			});
	});
