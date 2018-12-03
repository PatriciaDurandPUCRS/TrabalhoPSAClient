(function () {
  angular.module('app').service('historicoDataService', historicoDataService);

  /* @ngInject */
  function historicoDataService($filter, apiService, HISTORICO_URL) {
    return {
      getHistorico,
    };

    function getHistorico(matricula) {
      return apiService.get({
        route: $filter('string-format')(HISTORICO_URL, matricula),
        success: (response) => { return response },
      });
    }

  }
}());
