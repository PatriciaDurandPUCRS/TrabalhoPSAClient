(function () {
  angular.module('app').service('loginDataService', loginDataService);

  /* @ngInject */
  function loginDataService($filter, apiService, LOGIN_URL) {
    return {
      logar,
    };

    function logar(credential) {
      return apiService.post({
        route: LOGIN_URL,
        payload: credential,
        callback: getResult,
        error(response) {
          console.log(response);
        },
      });
    }

    function getResult(response) {
      return response.data;
    }
  }
}());
