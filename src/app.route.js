import angular from 'angular';

(function() {
  angular.module('app').config(ConfigureRoutes);

  /* @ngInject */
  function ConfigureRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });

    const login = {
      url: '/login',
      template: () =>
        import('@/modules/login/login.html' /* webpackChunkName: 'vLogin' */),
      controller: 'loginController',
      controllerAs: 'vm',
    };

    const turma = {
      url: '/turmas',
      template: () =>
        import('@/modules/turma/turma.html' /* webpackChunkName: 'vTurma' */),
      controller: 'turmaController',
      controllerAs: 'vm',
    };

    const menu = {
      url: '/menu',
      template: () =>
        import('@/modules/menu/menu.html' /* webpackChunkName: 'vMenu' */),
      controller: 'menuController',
      controllerAs: 'vm',
    };

    const matricula = {
      url: '/matricula',
      template: () =>
        import('@/modules/matricula/matricula.html' /* webpackChunkName: 'vMatricula' */),
      controller: 'matriculaController',
      controllerAs: 'vm',
    };

    const historico = {
      url: '/historico',
      template: () =>
        import('@/modules/historico/historico.html' /* webpackChunkName: 'vHistorico' */),
      controller: 'historicoController',
      controllerAs: 'vm',
    };

    const ocupacao = {
      url: '/ocupacao',
      template: () =>
        import('@/modules/ocupacao/ocupacao.html' /* webpackChunkName: 'vOcupacao' */),
      controller: 'ocupacaoController',
      controllerAs: 'vm',
    };

    const matriculados = {
      url: '/matriculados',
      template: () =>
        import('@/modules/matriculados/matriculados.html' /* webpackChunkName: 'vMatriculados' */),
      controller: 'matriculadosController',
      controllerAs: 'vm',
    };

    const totalMatriculados = {
      url: '/totalMatriculados',
      template: () =>
        import('@/modules/totalMatriculados/totalMatriculados.html' /* webpackChunkName: 'vTotalMatriculados' */),
      controller: 'totalMatriculadosController',
      controllerAs: 'vm',
    };
    
    $stateProvider
      .state('login', login)
      .state('turma', turma)
      .state('menu', menu)
      .state('matricula', matricula)
      .state('historico', historico)
      .state('ocupacao', ocupacao)
      .state('matriculados', matriculados)
      .state('totalMatriculados', totalMatriculados);

    $urlRouterProvider.otherwise('/login');
  }
})();
