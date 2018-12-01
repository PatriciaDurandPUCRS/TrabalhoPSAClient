import angular from 'angular';

class ModalSucesso {
  /* @ngInject */
  constructor($mdDialog, message) {
    this.closeModal = () => $mdDialog.hide();
    this.message = message;
  }
}

export default angular.module('app').controller('modalSucesso', ModalSucesso);
