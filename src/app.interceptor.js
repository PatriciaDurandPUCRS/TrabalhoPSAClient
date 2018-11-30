import angular from 'angular';
import httpStatus from 'http-status';

(function() {
  angular.module('app').factory('appInterceptor', appInterceptor);

  /* @ngInject */
  function appInterceptor($window, $location, $rootScope) {
    return {
      response,
      request,
    };

    function response(result) {
      if (isSessionExpired(result) || isSessionExpired(result.data)) {
        $window.sessionStorage.expirouSessao = true;
        $location.path('/login');
      }

      const token = result.data.accessToken;
      if (token) {
        $window.sessionStorage.token = token;
      }

      if (result.config.url.match('api/')) {
        $rootScope.numLoading -= 1;
        if ($rootScope.numLoading === 0) {
          $rootScope.loadingShow = false;
        }
      }

      window.scrollTo(0, 0);

      return result;
    }

    function request(config) {
      if (config.url.match('api/')) {
        $rootScope.numLoading += 1;
        if (!$rootScope.loadingShow) {
          $rootScope.loadingShow = true;
        }
      }

      window.scrollTo(0, 0);

      config.headers = config.headers || {};

      if ($window.sessionStorage.token) {
        config.headers['x-access-token'] = $window.sessionStorage.token;
      }

      return config;
    }

    function isSessionExpired({ status }) {
      return [httpStatus.UNAUTHORIZED, httpStatus.FORBIDDEN].includes(status);
    }
  }
})();
