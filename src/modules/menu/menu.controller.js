import angular from 'angular';

angular.module('app').controller('menuController', menuController);

/* @ngInject */
function menuController($state, $rootScope) {
  const vm = this; // jshint ignore:line
  vm.permissao = permissao;
  vm.irPara = irPara;

  vm.$onInit = function () {
    if (!$rootScope.autenticado) {
      $state.go('login');
    }
  }

  function permissao(role) {
    return $rootScope.usuario.permissao == role;
  }

  function irPara(route) {
    $state.go(route);
  }

}

export default 'menuController';
