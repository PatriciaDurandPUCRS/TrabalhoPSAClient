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
      window.scrollTo(0, 0);

      return response;
    }

    function request(config) {
      window.scrollTo(0, 0);

      config.headers = config.headers || {};

      return config;
    }

  }
})();
