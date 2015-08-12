(function(angular) {
	'use strict';

	angular.module('postTaskApp')
		.controller('MainCtrl', function($scope, $http, $q) {

			$scope.vm = {
				quesionFilters: [{
					name: 'All questions',
					type: undefined
				}, {
					name: 'Answered',
					type: true
				}, {
					name: 'Not Answered',
					type: false
				}],
			};

			$scope.vm.filter = $scope.vm.quesionFilters[0];

			$scope.changeFilter = function() {
				getQuestions();
			};

			function getQuestions() {
				return $http.get('/api/questions', {
						params: {
							answered: $scope.vm.filter.type
						}
					})
					.then(function(resolve) {
						$scope.questions = resolve.data;
						return resolve.data;
					});
			}

			function init() {
				$q.all([getQuestions()])
					.then(function(resolve) {
						console.log(resolve);
					});
			}

			init();

		});
})(angular);
