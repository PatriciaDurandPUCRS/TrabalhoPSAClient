import angular from 'angular';

angular.module('app').controller('turmaController', turmaController);

/* @ngInject */
function turmaController(turmaDataService, modalService, $filter) {
  const vm = this; // jshint ignore:line
  vm.buscaTurmas = buscaTurmas;
  vm.turmaDataService = turmaDataService;
  vm.modalService = modalService;
  vm.disciplina = {
    codcred: '',
    nome: '',
  };
  
  // vm.filtrarTurma = filtrarTurma;
  // vm.contatoSelecionado = null;
  
  // vm.$onInit = function () {
  //   vm.buscaTurmas();
  // };

  function buscaTurmas(disciplina) {
    vm.listaTurmas = {};
    turmaDataService.getListaTurmas(disciplina)
      .then(response => {
        vm.listaTurmas = response.data;
        vm.listaTurmaMensagem = vm.listaTurmas.length == 0 ? 'Não encontramos nenhuma disciplina com os dados inseridos!' : '';
      })
      .catch(response => {
        vm.modalService.openModalErro('Desculpa! Ocorreu um erro ao buscar a disciplina.');
      });
  }

  // function filtrarTurma(turma) {
  //   if (vm.listaTurmas !== '' && vm.listaTurmas !== undefined) {
  //     const results = turma ? vm.listaTurmas.filter(createFilterForTurma(turma)) : vm.listaTurmas;
  //     return results;
  //   }
  //   return null;
  // }

  // function createFilterForTurma(turma) {
  //   const lowercaseQuery = $filter('lowercase')(turma)
  //     .normalize('NFD')
  //     .replace(/[\u0300-\u036f]/g, '');
  //   return function filterFn(turma) {
  //     return (
  //       turma.disciplina
  //         .normalize('NFD')
  //         .replace(/[\u0300-\u036f]/g, '')
  //         .match(new RegExp(`(${lowercaseQuery})`, 'i')) ||
  //       turma.codCred
  //         .match(new RegExp(`(${lowercaseQuery})`, 'i'))
  //     );
  //   };
  // }

}

export default 'turmaController';
