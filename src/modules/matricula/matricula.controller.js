import angular from 'angular';

angular.module('app').controller('matriculaController', matriculaController);

/* @ngInject */
function matriculaController($rootScope, $state, matriculaDataService, modalService) {
  const vm = this; // jshint ignore:line
  vm.buscaTurmas = buscaTurmas;
  vm.modalService = modalService;
  vm.matriculaDataService = matriculaDataService;
  vm.adicionarGrade = adicionarGrade;
  vm.grade = {};

  vm.$onInit = function () {
    (!$rootScope.autenticado) ? $state.go('login') : buscaTurmas($rootScope.usuario.matricula);
  }

  function buscaTurmas(matricula) {
    vm.listaTurmas = {};
    matriculaDataService.getListaTurmas(matricula)
      .then(response => {
        vm.listaTurmas = response.data;
        vm.listaTurmaMensagem = vm.listaTurmas.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
      });
  }

  function adicionarGrade(turma) {
    matriculaDataService.adicionarDisciplina(turma, $rootScope.usuario.matricula)
      .then(response => {
        vm.grade = response.data;
        buscaTurmas($rootScope.usuario.matricula);
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao adicionar disciplina.');
      });

    // const horario= turma.horario.split(' ');

    // horario.forEach(element => {
    //   _.split(element, '', 0);    
    // });
    // switch (horario.char(1)) {
    //   case 2: vm.grade.Segunda
    //   case 3:
    //   case 4:
    //   case 5:
    //   case 6:
    //   case 7:
    // }

    // console.log(horario);

  }

}

export default 'matriculaController';
