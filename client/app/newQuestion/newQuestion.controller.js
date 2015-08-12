'use strict';

angular.module('postTaskApp')
	.controller('NewQuestionCtrl', function($scope, $http, notify, $state) {
		$scope.model = {

		};

		$scope.newQuestion = function() {
			var req = {
				title: $scope.model.title,
				text: $scope.model.text,
				authorName: $scope.model.authorName
			};

			$http.post('/api/questions', req)
				.then(function() {
						notify({
							message: 'Question was created!',
							classes: 'alert-success'
						});
						$scope.model = {};
						$state.go('main');
					},
					function() {
						notify({
							message: 'Error!',
							classes: 'alert-danger'
						});
					});
		};
	});
