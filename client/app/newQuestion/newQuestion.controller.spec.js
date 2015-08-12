'use strict';

describe('Controller: NewQuestionCtrl', function() {

	// load the controller's module
	beforeEach(module('postTaskApp'));

	var NewQuestionCtrl, scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		NewQuestionCtrl = $controller('NewQuestionCtrl', {
			$scope: scope
		});
	}));

	it('should ...', function() {
		expect(1).toEqual(1);
	});
});
