'use strict';

angular.module('postTaskApp')
	.controller('QuestionsCtrl', function($scope, $state, $http, $q, notify) {
		var questionId = $state.params.id;

		$scope.model = {};

		$scope.newAnswer = function() {
			var req = {
				answerText: $scope.model.answerText,
				authorName: $scope.model.authorName
			};

			$http.post('/api/questions/' + questionId + '/answers', req)
				.then(function(resolve) {
						notify({
							message: 'Answer was sended!',
							classes: 'alert-success'
						});
                        $scope.answers.push(resolve.data);
                        $scope.model = {};
					},
					function() {
						notify({
							message: 'Error!',
							classes: 'alert-danger'
						});
					});
		};

		function getQuestion() {
			return $http.get('/api/questions/' + questionId)
				.then(function(resolve) {
					return resolve.data;
				});
		}

		function getAnswers() {
			return $http.get('/api/questions/' + questionId + '/answers')
				.then(function(resolve) {
					return resolve.data;
				});
		}

		function init() {
			$q.all([getQuestion(), getAnswers()])
				.then(function(resolve) {
					$scope.question = resolve[0];
					$scope.answers = resolve[1];
					console.log(resolve);
				});
		}
		init();
	});
