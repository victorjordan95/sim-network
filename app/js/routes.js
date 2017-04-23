app.config(function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "templates/home.html",
        controller: 'mainCtrl'
	}).when("/cv/:id", {
		templateUrl: "templates/cv.html"
		, controller: 'cvController'
	}).when("/cadastro", {
		templateUrl: "templates/cadastro.htm"
		, controller: 'mainController'
	}).when("/termos", {
		templateUrl: "templates/termos.html"
		, controller: 'TermosCtrl'
	})
});