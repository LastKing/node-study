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

root.run(['$rootScope', '$log', function ($rootScope, $log) {
  //挂钩AngularJS渲染完成事件,在渲染完成的时候,执行初始化界面的工作,让Beyond模板中的一些功能起作用
  $rootScope.$on('$viewContentLoaded',
    function (event, viewConfig) {
      var before = new Date();
      beyondInit();
      var after = new Date();
      $log.debug("扫描并初始化界面元素 [耗时 " + (after.getTime() - before.getTime()) + " ms]");
    });
}]);