import angular from 'angular';

angular.module('app').service('modalService', modalService);

/* @ngInject */
function modalService($mdDialog) {
  return {
    fecharModal,
    openModalErro,
  };

  function fecharModal() {
    $mdDialog.hide();
  }

  function openModalErro(message, cb = () => { }) {
    $mdDialog.show({
      controllerAs: 'vm',
      controller: 'modalErro',
      template: require('@/components/modal-erro/modal-erro.html'),
      locals: { message },
    }).finally(cb);
  }
}




