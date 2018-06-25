import angular from 'angular';

angular.module('app').controller('loginController', loginController);

/* @ngInject */
function loginController(loginDataService) {
  const vm = this; // jshint ignore:line
  this.loginDataService = loginDataService;
  vm.logar = logar;
  vm.credencial = {};

  function logar(){
    this.loginDataService.logar(vm.credencial);
  }

}

export default 'loginController';
