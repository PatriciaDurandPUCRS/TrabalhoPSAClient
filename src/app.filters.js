import angular from 'angular';
import truncate from 'lodash/truncate';

(function () {
  angular.module('app')
    .filter('cpfCnpj', cpfCnpj)
    .filter('string-format', stringFormat)
    .filter('absolute', absolute)
    .filter('truncate', truncateString)

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

  function absolute() {
    return function (num) {
      return Math.abs(num);
    };
  }

  function truncateString() {
    return (longString, length = 15, omission = '...') => truncate(longString, { length, omission });
  }

}());
