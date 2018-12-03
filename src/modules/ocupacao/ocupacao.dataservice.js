(function () {
  angular.module('app').service('ocupacaoDataService', ocupacaoDataService);

  /* @ngInject */
  function ocupacaoDataService($filter, apiService, TURMA_OCUPACAO_URL) {
    return {
      getListaTurmaOcupacao,
    };

    function getListaTurmaOcupacao() {
      return apiService.get({
        route: TURMA_OCUPACAO_URL,
        success: (response) => { return response },
      });
    }

  }
}());
