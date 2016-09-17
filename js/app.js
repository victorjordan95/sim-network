var app = angular.module("colaboradores", []);

        app.controller("colaboradoresCtrl", function($scope){
           $scope.app = "Colaboradores";
			$scope.colaboradores = [
				{nome: "Pedro", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' },
				{nome: "Pedro", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' },
				{nome: "Pedro", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' },
				{nome: "Pedro", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' }
			];
        });