import angular from 'angular';

angular.module('app')
  .constant('LOGIN_URL', '/teste/{0}')
  .constant('TESTE_DOIS_URL', '/teste/{0}/{1}');
