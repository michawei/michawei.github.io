var app = angular.module('michaApp', []);

app.controller('indexCtrl', ['$scope', '$http', function($scope, $http){
	$scope.page = 'Home';
	this.set_page = function(pageString){
		$scope.page = pageString;
	}
}]);