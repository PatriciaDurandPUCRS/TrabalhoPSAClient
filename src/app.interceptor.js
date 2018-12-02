import angular from 'angular';
import httpStatus from 'http-status';

(function() {
  angular.module('app').factory('appInterceptor', appInterceptor);

  /* @ngInject */
  function appInterceptor($window, $rootScope) {
    return {
      response,
      request,
    };

    function response(response) {
      console.log(response.headers('role'));
      console.log(response.headers());
      if (response.headers('role')) {
        $rootScope.permissao = response.headers('role');
      }

      window.scrollTo(0, 0);

      return response;
    }

    function request(config) {
      window.scrollTo(0, 0);

      config.headers = config.headers || {};

      if ($window.sessionStorage.token) {
        config.headers['x-access-token'] = $window.sessionStorage.token;
      }

      return config;
    }

  }
})();
