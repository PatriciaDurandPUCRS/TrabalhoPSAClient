import angular from 'angular';

angular.module('app').controller('loginController', loginController);

function loginController(loginDataService) {
  const vm = this;
  vm.loginDataService = loginDataService;
  vm.logar = logar;
  vm.credencial = {};

  function logar(){
    try {
      var response = vm.loginDataService.logar(vm.credencial);

    } catch (e) {

    }
  }

}

export default 'loginController';
