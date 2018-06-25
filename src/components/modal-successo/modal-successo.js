import angular from 'angular';

class ModalSuccesso {
  /* @ngInject */
  constructor($mdDialog, message) {
    this.closeModal = () => $mdDialog.hide();
    this.message = message;
  }
}

export default angular.module('app').controller('modalSucesso', ModalSuccesso);
