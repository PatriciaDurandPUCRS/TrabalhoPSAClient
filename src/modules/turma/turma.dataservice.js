(function () {
  angular.module('app').service('turmaDataService', turmaDataService);

  /* @ngInject */
  function turmaDataService($filter, apiService, TURMA_DETALHE_URL) {
    return {
      getListaTurmas,
    };

    function getListaTurmas(disciplina) {
      return apiService.get({
        route: $filter('string-format')(TURMA_DETALHE_URL, disciplina.nome, disciplina.codCred),
        success: (response) => { return response },
      });
    }

  }
}());
