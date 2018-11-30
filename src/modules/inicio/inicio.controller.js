import angular from 'angular';

angular.module('app').controller('inicioController', inicioController);

/* @ngInject */
function inicioController(modalService) {
  const vm = this; // jshint ignore:line
  this.modalService = modalService;

  vm.ticket = ticket;

  function ticket(){
    //emitir ticket
    //abrir modal para mostrar o ticket emitido
    // this.modalService.openModal("3b4hb324hv");
  }

}

export default 'inicioController';
