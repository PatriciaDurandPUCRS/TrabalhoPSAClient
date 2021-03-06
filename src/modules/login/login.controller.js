import angular from 'angular';

angular.module('app').controller('loginController', loginController);

function loginController($rootScope, $state, loginDataService, modalService) {
  const vm = this;
  vm.loginDataService = loginDataService;
  vm.modalService = modalService;
  vm.logar = logar;
  vm.credencial = {};

  function logar(){
    try {
      vm.loginDataService.logar(vm.credencial)
      .then(response => {
        $rootScope.autenticado = response.status == 200;
        $rootScope.usuario = response.data;
        $state.go('menu');
      })
      .catch(response => {
        vm.modalService.openModalErro('Verifique se os dados inseridos estão corretos.');
      });

    } catch (e) {

    }
  }

}

export default 'loginController';
