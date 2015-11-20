/**
 * Created by Demon on 2014/11/2.
 */
var overview = angular.module('overview', ['ui.router', 'ui.router.stateHelper']);

//overview模块路由和依赖配置
overview.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'overview',
    url: '/overview',
    parent: 'root',
    templateUrl: 'modules/overview/overview.html'
  });
});