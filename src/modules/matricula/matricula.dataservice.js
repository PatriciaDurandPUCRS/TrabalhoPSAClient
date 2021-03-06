(function () {
  angular.module('app').service('matriculaDataService', matriculaDataService);

  /* @ngInject */
  function matriculaDataService($filter, apiService, TURMA_MATRICULA_URL, CADEIRA_ADICIONAR_URL, CADEIRA_EXCLUIR_URL, GRADE_URL) {
    return {
      getGrade,
      getListaTurmas,
      adicionarDisciplina,
      excluirDisciplina,
    };

    function getGrade(matricula) {
      return apiService.get({
        route: $filter('string-format')(GRADE_URL, matricula),
        success: (response) => { return response },
      });
    }

    function getListaTurmas(matricula) {
      return apiService.get({
        route: $filter('string-format')(TURMA_MATRICULA_URL, matricula),
        success: (response) => { return response },
      });
    }

    function adicionarDisciplina(disciplina, matricula) {
      return apiService.post({
        route: $filter('string-format')(CADEIRA_ADICIONAR_URL, matricula),
        payload: disciplina,
      });
    }

    function excluirDisciplina(disciplina, matricula) {
      return apiService.post({
        route: $filter('string-format')(CADEIRA_EXCLUIR_URL, matricula),
        payload: disciplina,
      });
    }

  }
}());
