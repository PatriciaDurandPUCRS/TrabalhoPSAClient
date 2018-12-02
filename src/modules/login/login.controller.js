import angular from 'angular';

angular.module('app').controller('loginController', loginController);

function loginController(loginDataService, modalService, $state, $rootScope) {
  const vm = this;
  vm.loginDataService = loginDataService;
  vm.modalService = modalService;
  vm.logar = logar;
  vm.credencial = {};

  function logar(){
    try {
      vm.loginDataService.logar(vm.credencial)
      .then(response => {
        debugger;

        $rootScope.autenticado = response.status == 200;
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
