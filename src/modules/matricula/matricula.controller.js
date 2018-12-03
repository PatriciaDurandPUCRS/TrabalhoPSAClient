import angular from 'angular';

angular.module('app').controller('matriculaController', matriculaController);

/* @ngInject */
function matriculaController($rootScope, $state, matriculaDataService, modalService) {
  const vm = this; // jshint ignore:line
  vm.buscaTurmas = buscaTurmas;
  vm.modalService = modalService;
  vm.matriculaDataService = matriculaDataService;
  vm.adicionarDisciplina = adicionarDisciplina;
  vm.excluirDisciplina = excluirDisciplina;
  vm.grade = {};

  vm.$onInit = function () {
    if (!$rootScope.autenticado) {
      $state.go('login');
    } else {
      buscaTurmas($rootScope.usuario.matricula);
      buscaGrade($rootScope.usuario.matricula);
    }
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

  function buscaGrade(matricula) {
    vm.listaTurmas = {};
    matriculaDataService.getGrade(matricula)
      .then(response => {
        vm.grade = response.data;
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao efetuar a busca.');
      });
  }

  function adicionarDisciplina(turma) {
    matriculaDataService.adicionarDisciplina(turma, $rootScope.usuario.matricula)
      .then(response => {
        vm.grade = response.data;
        buscaTurmas($rootScope.usuario.matricula);
        buscaGrade($rootScope.usuario.matricula);
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao adicionar disciplina.');
      });
  }

  function excluirDisciplina(turma) {
    matriculaDataService.excluirDisciplina(turma, $rootScope.usuario.matricula)
      .then(response => {
        vm.grade = response.data;
        buscaTurmas($rootScope.usuario.matricula);
        buscaGrade($rootScope.usuario.matricula);
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao adicionar disciplina.');
      });
  }
  

}

export default 'matriculaController';
