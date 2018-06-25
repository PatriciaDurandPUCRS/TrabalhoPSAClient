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

    const inicio = {
      url: '/inicio',
      template: () =>
        import('@/modules/inicio/inicio.html' /* webpackChunkName: 'vInicio' */),
      controller: 'inicioController',
      controllerAs: 'vm',
    };

    const login = {
      url: '/login',
      template: () =>
        import('@/modules/login/login.html' /* webpackChunkName: 'vInicio' */),
      controller: 'loginController',
      controllerAs: 'vm',
    };

    // const recuperarSenha = {
    //   url: '/recuperar-senha',
    //   template: () =>
    //     import('@/components/autenticacao/recuperar-senha/recuperar.senha.html' /* webpackChunkName: 'vRecuperarSenha' */),
    //   controller: 'recuperarSenhaController',
    //   controllerAs: 'recuperarSenhaController',
    // };
    //
    // const alterarSenha = {
    //   url: '/redef/:token',
    //   template: () =>
    //     import('@/components/autenticacao/recuperar-senha/recuperar.senha.html' /* webpackChunkName: 'vRedifinirSenha' */),
    //   controller: 'recuperarSenhaController',
    //   controllerAs: 'recuperarSenhaController',
    // };
    //
    //
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
      .state('inicio', inicio)
      .state('login', login);
      // .state('recuperarSenha', recuperarSenha)
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

    $urlRouterProvider.otherwise('/inicio');
  }
})();
