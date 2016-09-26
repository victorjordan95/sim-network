var app = angular.module("colaboradores", []);

app.controller("colaboradoresCtrl", function($scope){
	$scope.app = "Colaboradores";
	$scope.colaboradores = [
		{nome: "byCasseb", funcao:"CEO", link: "http://www.bycasseb.hol.es/", descricao: "By Casseb é a empresa que administra a iniciativa Sim Network utilizando seu potencial organizacional e criativo, cuidando das suas ações inovadoras.", imagem: 'bycasseb.jpg' },
		{nome: "Victor Jordan",  funcao:"Front-end/UX Designer",link: "http://victorjordan.surge.sh", descricao: "Nosso front-end, com experiência com UX, amante de novas tecnologias e Star Wars, está sempre procurando aprender coisas novas  ", imagem: 'victor-jordan.jpg' },
		{nome: "Pedro", funcao:"função", link: "", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' },
		{nome: "Pedro", funcao:"função", link: "", descricao: "breve texto sobre o colaborador", imagem: 'Logo Sim Network 2.1.png' }
	];
});

app.controller("servicesCtrl", function($scope){
	$scope.app = "O que fazemos";
	$scope.services = [
		{title: "Sites", description: "Produzimos sites sobre medida para seu empreendimento, cuidando desde de uma apurada analise do que seu negócio precisa em um site até redação dos textos presentes nele.", imagem: "site.png"},
		{title: "Identidade Visual", description: "Toda empresa precisa de um simbolo e este simbolo precisa ser muito bem pensado, sobre este serviço temos desde uma equipe criativa para inovar focado no objetivo do logo até o preparo de uma versão final com manual de identidade visual. Faça conosco seus cartões de visitas com nossa equipe de criativos para melhorar a apresentação da sua empresa, folhetos, calendários e mouse-pads customizados e inovadores.", imagem: "identidade.png"},
		{title: "Social Media", description: "Sua empresa precisa estar no facebook, interagindo com seus clientes e dando a eles conteúdos relacionados, deixe sua página sob nossos cuidados e vamos gerar conteúdo para sua página sempre ter novidades.", imagem: "social-media.png"}
	];
});


