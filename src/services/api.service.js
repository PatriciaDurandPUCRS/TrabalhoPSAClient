import angular from 'angular';

(function () {
  angular.module('app').service('apiService', apiService);

  /* @ngInject */
  function apiService($http, $log, $filter, $rootScope, modalService, API_URL) {
    return {
      get,
      put,
      deletar,
      post,
      postWithPromise,
    };

    function post(request) {
      return $http.post(API_URL + request.route, request.payload, {
        headers: request.headers,
      })
        .then(request.callback)
        .catch(request.error == undefined ? logErrorDetails : request.error);
    }

    function postWithPromise(request) {
      return $http.post(API_URL + request.route, request.payload);
    }

    function get(request) {
      return $http.get(API_URL + request.route, {
        headers: request.headers,
      })
        .then(request.success == undefined ? getResponse : request.success)
        .catch(request.error == undefined ? logErrorDetails : request.error);
    }

    function put(request) {
      return $http.put(API_URL + request.route, request.payload, {
        headers: request.headers,
      })
        .then(request.success == undefined ? getResponse : request.success)
        .catch(request.error == undefined ? logErrorDetails : request.error);
    }

    function deletar(request) {
      return $http.delete(API_URL + request.route, {
        data: request.payload,
        headers: request.headers,
      })
        .then(request.success == undefined ? getResponse : request.success)
        .catch(request.error == undefined ? logErrorDetails : request.error);
    }

    function getResponse(response) {
      return response.data;
    }

    function logErrorDetails(error) {
      modalService.openModal(error.mensagem);
      const errorMessage = $filter('string-format')('Ocorreu um erro ao chamar o endpoint {0}: {1} -> {2}', API_URL + error.config.url);
      $log.error(errorMessage);
      return error.status;
    }
  }
}());
