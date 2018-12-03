import angular from 'angular';

angular.module('app').controller('ocupacaoController', ocupacaoController);

/* @ngInject */
function ocupacaoController($rootScope, $state, ocupacaoDataService, modalService, ) {
  const vm = this; // jshint ignore:line
  vm.modalService = modalService;
  vm.buscaOcupacao = buscaOcupacao;
  vm.listaTurmaOcupacao = {};

  vm.$onInit = function () {
    if (!$rootScope.autenticado || $rootScope.usuario.permissao != 'COORDENACAO') {
      $state.go('login');
    } else {
      vm.buscaOcupacao();
    }
  }

  function buscaOcupacao() {
    vm.listaTurmaOcupacao = {};
    ocupacaoDataService.getListaTurmaOcupacao()
      .then(response => {
        vm.listaTurmaOcupacao = response.data;
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
      });
  }

}

export default 'ocupacaoController';
