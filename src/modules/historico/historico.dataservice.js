(function () {
  angular.module('app').service('historicoDataService', historicoDataService);

  /* @ngInject */
  function historicoDataService($filter, apiService, TURMA_DETALHE_URL) {
    return {
      getListaTurmas,
    };

    function getListaTurmas(disciplina) {
      const param = disciplina.codCred ? disciplina.codCred : disciplina.nome;
      return apiService.get({
        route: $filter('string-format')(TURMA_DETALHE_URL, param),
        success: (response) => { return response },
      });
    }

  }
}());
