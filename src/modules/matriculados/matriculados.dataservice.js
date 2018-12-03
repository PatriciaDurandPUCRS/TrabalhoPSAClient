(function () {
  angular.module('app').service('matriculadosDataService', matriculadosDataService);

  /* @ngInject */
  function matriculadosDataService($filter, apiService, TURMA_MATRICULADOS_URL) {
    return {
      getlistaMatriculados,
    };

    function getlistaMatriculados(disciplina) {
      const param = disciplina.codCred ? disciplina.codCred : disciplina.nome;
      return apiService.get({
        route: $filter('string-format')(TURMA_MATRICULADOS_URL, param),
        success: (response) => { return response },
      });
    }

  }
}());
