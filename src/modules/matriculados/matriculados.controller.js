import angular from 'angular';

angular.module('app').controller('matriculadosController', matriculadosController);

/* @ngInject */
function matriculadosController(turmaDataService, modalService) {
  const vm = this; // jshint ignore:line
  vm.buscaAlunosMatriculados = buscaAlunosMatriculados;
  vm.turmaDataService = turmaDataService;
  vm.modalService = modalService;
  vm.disciplina = {
    codcred: '',
    nome: '',
  };

  function buscaAlunosMatriculados(disciplina) {
    vm.listaMatriculados = {};
    turmaDataService.getlistaMatriculados(disciplina)
      .then(response => {
        vm.listaMatriculados = response.data;
        vm.listaMatriculadosMensagem = vm.listaMatriculados.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
      });
  }

}

export default 'matriculadosController';
