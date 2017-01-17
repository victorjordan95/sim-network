var app = angular.module("app", ["ngRoute"]);
app.service('anchorSmoothScroll', function () {
    this.scrollTo = function (eID) {
        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };
});
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
app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
        , controller: 'mainCtrl'
    }).when("/cv/:id", {
        templateUrl: "templates/cv.html"
        , controller: 'cvController'
    }).when("/cadastro", {
        templateUrl: "templates/cadastro.htm"
        , controller: 'mainController'
    })
});