import angular from 'angular';

angular.module('app')
  .constant('LOGIN_URL', '/autenticacao/')
  .constant('TURMA_MATRICULA_URL', '/turma/matricula/{0}')
  .constant('CADEIRA_ADICIONAR_URL', '/turma/matricula/adicionar/{0}')
  .constant('CADEIRA_EXCLUIR_URL', '/turma/matricula/excluir/{0}')
  .constant('TURMA_DETALHE_URL', '/turma/detalhe/?nome={0}&codCred={1}')
  .constant('TURMA_OCUPACAO_URL', '/turma/ocupacao')
  .constant('TURMA_MATRICULADOS_URL', '/turma/matriculados/?disciplina={0}')
  .constant('HISTORICO_URL', '/turma/historico/{0}')
  .constant('GRADE_URL', '/turma/grade/{0}');
  