import angular from 'angular';

angular.module('app').controller('historicoController', historicoController);

/* @ngInject */
function historicoController($rootScope, $state, historicoDataService, modalService) {
  const vm = this; // jshint ignore:line
  vm.buscaHistorico = buscaHistorico;
  vm.historicoDataService = historicoDataService;
  vm.modalService = modalService;
  
  vm.$onInit = function () {
    (!$rootScope.autenticado) ? $state.go('login') : buscaHistorico($rootScope.usuario.matricula);
  }

  function buscaHistorico(matricula) {
    vm.listaCadeirasConcluidas = {};
    historicoDataService.getHistorico(matricula)
      .then(response => {
        vm.listaCadeirasConcluidas = response.data;
        vm.listaTurmaMensagem = vm.listaCadeirasConcluidas.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
      });
  }

}

export default 'historicoController';
