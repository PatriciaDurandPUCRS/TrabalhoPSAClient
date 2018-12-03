import angular from 'angular';

angular.module('app').controller('matriculadosController', matriculadosController);

/* @ngInject */
function matriculadosController(turmaDataService, modalService, $filter) {
  const vm = this; // jshint ignore:line
  // vm.buscaTurmas = buscaTurmas;
  // vm.turmaDataService = turmaDataService;
  // vm.modalService = modalService;
  // vm.disciplina = {
  //   codcred: '',
  //   nome: '',
  // };

  // function buscaTurmas(disciplina) {
  //   vm.listaTurmas = {};
  //   turmaDataService.getListaTurmas(disciplina)
  //     .then(response => {
  //       vm.listaTurmas = response.data;
  //       vm.listaTurmaMensagem = vm.listaTurmas.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
  //     })
  //     .catch(response => {
  //       vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao buscar a disciplina.');
  //     });
  // }

}

export default 'matriculadosController';
