/**
 * Created by Rain on 2015/11/20.
 */
var root = angular.module('root', ['ui.router', 'ui.router.stateHelper', 'ui.bootstrap', 'lazyload',
  'overview','user']);

root.config(function ($stateProvider, $urlRouterProvider) {
  //默认到overview路由
  $urlRouterProvider.otherwise("/overview");

  var baseUrl = "modules/root";
  var templatesBaseUrl = baseUrl + "/templates";
  var controllersBaseUrl = baseUrl + "/controllers";

  $stateProvider.state({
    name: 'root',
    url: '',
    templateUrl: templatesBaseUrl + '/root.html',
    controller: 'RootCtrl',
    resolve: dependencies('root', [
      controllersBaseUrl + '/root.js'
    ])
  });

});
