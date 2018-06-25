import angular from 'angular';
import truncate from 'lodash/truncate';

(function () {
  angular.module('app')
    .filter('telefone', telefone)
    .filter('agencia', agencia)
    .filter('boleto', boleto)
    .filter('cpfCnpj', cpfCnpj)
    .filter('string-format', stringFormat)
    .filter('celularResumido', celularResumido)
    .filter('cpfCnpjResumido', cpfCnpjResumido)
    .filter('absolute', absolute)
    .filter('truncate', truncateString)
    .filter('firstLetterCapitalize', firstLetterCapitalize);

  function telefone() {
    return function (telefone) {
      return telefone ? telefone.length < 11 ? `(${telefone.substr(0, 2)})${telefone.substr(2, 4)}-${telefone.substr(6, 4)}` : `(${telefone.substr(0, 2)})${telefone.substr(2, 5)}-${telefone.substr(7, 4)}` : null;
    };
  }

  function agencia() {
    return function (agencia) {
      const resto = 4 - String(agencia).length;
      return '0'.repeat(resto > 0 ? resto : '0') + agencia;
    };
  }

  function boleto() {
    return function (boleto) {
      return boleto ? `${boleto.substr(0, 5)}.${boleto.substr(5, 5)} ${boleto.substr(10, 5)}.${boleto.substr(15, 6)} ${boleto.substr(21, 5)}.${boleto.substr(26, 6)} ${boleto.substr(32, 1)} ${boleto.substr(33, 14)}` : null;
    };
  }

  function cpfCnpj() {
    return function (cpfCnpj) {
      if (cpfCnpj != '' && cpfCnpj != undefined) {
        if (cpfCnpj.length > 11) {
          return cpfCnpj ? `${cpfCnpj.substr(0, 2)}.${cpfCnpj.substr(2, 3)}.${cpfCnpj.substr(5, 3)}/${cpfCnpj.substr(8, 4)}-${cpfCnpj.substr(12, 2)}` : null;
        }
        return cpfCnpj ? `${cpfCnpj.substr(0, 3)}.${cpfCnpj.substr(3, 3)}.${cpfCnpj.substr(6, 3)}-${cpfCnpj.substr(9, 2)}` : null;
      }
    };
  }

  function stringFormat() {
    return function (input) {
      const args = arguments;
      return input.replace(/\{(\d+)\}/g, (match, capture) => args[1 * capture + 1]);
    };
  }

  function celularResumido() {
    return function (telefone) {
      return `(**)*****${telefone.substr(telefone.length - 4)}`;
    };
  }

  function cpfCnpjResumido() {
    return function (cpfCnpj) {
      if (cpfCnpj != '' && cpfCnpj != undefined) {
        if (cpfCnpj.length > 11) {
          // cnpj 00.***.***/****-00
          return `${cpfCnpj.substr(0, 2)}.***.***/****-${cpfCnpj.substr(cpfCnpj.length - 2)}`;
        }
        // cpf 000.***.***-00
        return `${cpfCnpj.substr(0, 3)}.***.***-${cpfCnpj.substr(cpfCnpj.length - 2)}`;
      }
    };
  }

  function absolute() {
    return function (num) {
      return Math.abs(num);
    };
  }

  function truncateString() {
    return (longString, length = 15, omission = '...') => truncate(longString, { length, omission });
  }

  function firstLetterCapitalize() {
    return str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}());
