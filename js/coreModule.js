define(function () {

	var coreModule = angular.module('coreModule',[]);
	coreModule.controller('maincontroller',function ($scope) {
		$scope.title = "HelloAngular";
	});
	
});