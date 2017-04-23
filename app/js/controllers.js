app.controller("mainCtrl", function ($scope, $http, $routeParams, $location, $anchorScroll, anchorSmoothScroll) {
	$http.get("/json/colaboradores.json").then(function (response) {
		$scope.colaboradores = response.data;
	});
	$http.get("/json/services.json").then(function (response) {
		$scope.services = response.data;
	});
	$scope.gotoElement = function (eID) {
		// set the location.hash to the id of
		// the element you wish to scroll to.
		$location.hash('bottom');
		// call $anchorScroll()
		anchorSmoothScroll.scrollTo(eID);
	};
});
app.controller('cvController', function ($scope, $http, $routeParams) {
	$scope.name = "teste";
	$http.get('/json/colaboradores/' + $routeParams.id + ".json").then(function (response) {
		$scope.colaboradores = response.data;
	});
});

app.controller('TermosCtrl', function($scope, $http){
  $http.get('http://api.myjson.com/bins/x7jzr').then(function(termos){
    $scope.termos = termos.data;
    console.log(termos);
  });
})