import decoratorHelper from './helper';

const ngAsync = function () {
  return function (target, key, descriptor) {
    const fn = descriptor.value;
    descriptor.value = function (...args) {
      const result = fn.apply(this, args);
      const $injector = decoratorHelper.injector;

      $injector.invoke(($rootScope, $q) => {
        'ngInject';

        $q.when(result).then(() => $rootScope.$applyAsync());
      });
    };
  };
};

export default ngAsync;
