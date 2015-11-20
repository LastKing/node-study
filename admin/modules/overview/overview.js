/**
 * Created by Rain on 2015/11/20.
 */
var overview = angular.module('overview', ['ui.router', 'ui.router.stateHelper']);

//overview模块路由和依赖配置
overview.config(function ($stateProvider) {

  $stateProvider.state({
    name: 'overview',
    url: '/overview',
    parent: 'root',
    templateUrl: 'modules/overview/overview.html'
  });
});