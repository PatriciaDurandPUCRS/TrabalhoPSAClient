import angular from 'angular';

(function() {
  angular
    .module('app')
    .constant('_', window._)
    .constant('API_URL', process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5001/api')
    .config(Configuration);

  /* @ngInject */
  function Configuration($httpProvider, $compileProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common.Accept = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|sms|tel|data):/);

    $httpProvider.defaults.headers.get['If-Modified-Since'] = new Date('2017', '08', '01').getTime();

    $httpProvider.interceptors.push('appInterceptor');
  }
})();
