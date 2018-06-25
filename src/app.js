import 'babel-polyfill';
import angular from 'angular';

import '@/app.vendors';

moment.locale('pt-br');

const requireAll = (r) => {
  r.keys().forEach(r);
};

/* Importa Styles */
requireAll(require.context('@', true, /\.(scss|sass|css)$/));

angular.module('app', [
  'ui.router',
  'ngMessages',
  'ui.utils.masks',
  'ngMaterial',
]);

require('@/app.config');
require('@/app.filters');
require('@/app.interceptor');
require('@/app.route');
require('@/app.run');

requireAll(require.context('@/api', true, /^(?!.*\.spec\.js$).*\.js$/));
requireAll(require.context('@/services', true, /^(?!.*\.spec\.js$).*\.js$/));
requireAll(require.context('@/modules', true, /^(?!.*\.spec\.js$).*\.js$/));
requireAll(require.context('@/components', true, /^(?!.*\.spec\.js$).*\.js$/));
