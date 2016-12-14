var app = angular.module("app", ["ngRoute"]);

app.controller("mainCtrl", function($scope,$http,$routeParams){
    $http.get("/json/colaboradores.json").then(function (response) {
        $scope.colaboradores = response.data;
    });
    $http.get("/json/services.json").then(function(response){
       $scope.services = response.data; 
    });
});

app.controller('cvController', function ($scope, $http, $routeParams) {
    $scope.name = "teste";
    $http.get('/json/colaboradores/' + $routeParams.id + ".json").then(function (response) {
        $scope.colaboradores = response.data;
    });
});

app.config(function($routeProvider) {
	$routeProvider
    .when("/", {
        templateUrl : "templates/home.html",
        controller: 'mainCtrl'
    })
    .when("/cv/:id", {
        templateUrl : "templates/cv.html",
        controller : 'cvController'
    })
    .when("/cadastro", {
        templateUrl : "templates/cadastro.htm",
        controller: 'mainController'
    })
});


