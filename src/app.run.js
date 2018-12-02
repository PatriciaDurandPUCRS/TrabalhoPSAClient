import angular from 'angular';
import decoratorHelper from '@/decorators/helper';

/* @ngInject */
const appRun = (
  $rootScope, $transitions, $location, $state, $injector
) => {
  $rootScope._ = window._;
  $rootScope.authenticated = false;

  decoratorHelper.injector = $injector;

  $transitions.onEnter({}, (transition, state) => {
    // const publicStates = ['login', 'usuario', 'inicio'];
    // const isRestrictedState = !publicStates.includes(state.name);
    //
    // if (!$rootScope.authenticated && isRestrictedState) {
    //   return transition.router.stateService.target('inicio');
    // }

    return true;
  });
};

export default angular.module('app').run(appRun).name;
