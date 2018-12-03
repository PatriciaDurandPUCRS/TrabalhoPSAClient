import angular from 'angular';

angular.module('app').controller('matriculadosController', matriculadosController);

/* @ngInject */
function matriculadosController(matriculadosDataService, modalService) {
  const vm = this; // jshint ignore:line
  // vm.buscaAlunosMatriculados = buscaAlunosMatriculados;
  // vm.matriculadosDataService = matriculadosDataService;
  // vm.modalService = modalService;
  // vm.listaMatriculados = {};
  // vm.disciplina = {
  //   codcred: '',
  //   nome: '',
  // };

  // function buscaAlunosMatriculados(disciplina) {
  //   matriculadosDataService.getlistaMatriculados(disciplina)
  //     .then(response => {
  //       vm.listaMatriculados = _.groupBy(response.data, "disciplina");
  //       // vm.listaMatriculadosMensagem = vm.listaMatriculados.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
  //     })
  //     .catch(response => {
  //       vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
  //     });
  // }

}

export default 'matriculadosController';
