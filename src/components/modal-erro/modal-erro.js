import angular from 'angular';

class ModalErro {
  /* @ngInject */
  constructor($mdDialog, message) {
    this.closeModal = () => $mdDialog.hide();
    this.message = message;
  }
}

export default angular.module('app').controller('modalErro', ModalErro);
