import angular from 'angular';

angular.module('app').controller('menuController', menuController);

/* @ngInject */
function menuController($state, modalService) {
  const vm = this; // jshint ignore:line
  // this.modalService = modalService;

  vm.$onInit = function () {
    ($state.autenticado) ? showMenu() : $state.go('login');
  };

}

export default 'menuController';
