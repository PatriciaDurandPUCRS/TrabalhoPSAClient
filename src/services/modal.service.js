import angular from 'angular';

angular.module('app').service('modalService', modalService);

/* @ngInject */
function modalService($mdDialog) {
  return {
    fecharModal,
    openModal,
  };

  function fecharModal() {
    $mdDialog.hide();
  }

  function openModal(message, cb = () => { }) {
    $mdDialog.show({
      controllerAs: 'vm',
      controller: 'modalSucesso',
      template: require('@/components/modal-successo/modal-successo.html'),
      locals: { message },
    }).finally(cb);
  }
}




