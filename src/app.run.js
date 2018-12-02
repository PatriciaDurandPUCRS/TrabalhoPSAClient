import angular from 'angular';
import decoratorHelper from '@/decorators/helper';

/* @ngInject */
const appRun = (
  $rootScope, $transitions, $location, $state, $injector
) => {
  $rootScope._ = window._;
  $rootScope.autenticado = false;

  decoratorHelper.injector = $injector;

  $transitions.onEnter({}, (transition, state) => {
    const publicStates = ['login', 'turma'];
    const isRestrictedState = !publicStates.includes(state.name);
    
    if (!$rootScope.autenticado && isRestrictedState) {
      return transition.router.stateService.target('login');
    }

    return true;
  });
};

export default angular.module('app').run(appRun).name;
