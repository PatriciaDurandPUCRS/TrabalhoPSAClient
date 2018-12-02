import angular from 'angular';

(function() {
  angular.module('app').config(ConfigureRoutes);

  /* @ngInject */
  function ConfigureRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });

    // const app = {
    //   template: () => import('@/components/layout-interno.html' /* webpackChunkName: 'vLayoutInterno' */),
    //   abstract: true,
    // };

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
        import('@/modules/turma/turma.html' /* webpackChunkName: 'vRecuperarSenha' */),
      controller: 'turmaController',
      controllerAs: 'vm',
    };

    const menu = {
      url: '/menu',
      template: () =>
        import('@/modules/menu/menu.html' /* webpackChunkName: 'vRedifinirSenha' */),
      controller: 'menuController',
      controllerAs: 'vm',
    };
    
    // const conta = {
    //   template: '<div ui-view></div>',
    //   abstract: true,
    // };
    //
    // const minhaConta = {
    //   url: '^/lancamentos',
    //   template: () => import('@/components/conta/minha-conta/minha.conta.html' /* webpackChunkName: 'vMinhaConta' */),
    //   controller: 'minhaContaController',
    //   controllerAs: 'minhaContaController',
    // };
    //
    // const transferencia = {
    //   url: '^/transferencia',
    //   template: () =>
    //     import('@/components/conta/transferencia/transferencia.html' /* webpackChunkName: 'vTransferencia' */),
    //   controller: 'transferenciaController',
    //   controllerAs: 'transferenciaController',
    //   params: {
    //     valorTransferencia: 0,
    //   },
    // };
    //
    // const scheduling = {
    //   url: '^/agendamentos',
    //   component: 'scheduling',
    // };
    //
    // const saque = {
    //   url: '^/saque',
    //   template: () => import('@/components/conta/saque/saque.html' /* webpackChunkName: 'vSaque' */),
    //   controller: 'saqueController',
    //   controllerAs: 'vm',
    // };
    //
    // const deposito = {
    //   url: '^/deposito',
    //   template: () => import('@/components/conta/deposito/deposito.html' /* webpackChunkName: 'vDeposito' */),
    //   controller: 'depositoController',
    //   controllerAs: 'vm',
    // };
    //
    // const store = {
    //   url: '/app',
    //   template: '<div ui-view></div>',
    // };

    $stateProvider
      .state('login', login)
      .state('turma', turma)
      .state('menu', menu);
      // .state('alterarSenha', alterarSenha)
      //
      // .state('app', app)
      //
      // .state('app.conta', conta)
      // .state('app.conta.lancamentos', minhaConta)
      // .state('app.conta.transferencia', transferencia)
      // .state('app.conta.scheduling', scheduling)
      // .state('app.conta.saque', saque)
      // .state('app.conta.deposito', deposito)

      // .state('store', store);

    $urlRouterProvider.otherwise('/login');
  }
})();
