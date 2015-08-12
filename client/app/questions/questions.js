'use strict';

angular.module('postTaskApp')
	.config(function($stateProvider) {
		$stateProvider
			.state('questions', {
				url: '/questions/:id',
				templateUrl: 'app/questions/questions.html',
				controller: 'QuestionsCtrl'
			});
	});
