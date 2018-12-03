import angular from 'angular';

angular.module('app')
  .constant('LOGIN_URL', '/autenticacao/')
  .constant('TURMA_MATRICULA_URL', '/turma/matricula/listar-turmas/{0}')
  .constant('TURMA_DETALHE_URL', '/turma/detalhe/?disciplina={0}')
  .constant('TURMA_OCUPACAO_URL', '/turma/ocupacao')
  .constant('TURMA_MATRICULADOS_URL', '/turma/matriculados');
  