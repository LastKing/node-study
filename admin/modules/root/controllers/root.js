/**
 * Created by Rain on 2015/11/20.
 */
var RootCtrl = root.controller('RootCtrl', function ($scope, $state) {

  $scope.title = 'test';

  //如果没有指定路径,直接跳转到 /overview 路由,因为Root控制器只提供一个外部框架包装,并不提供具体功能
  if ($state.current.name == 'root')
    $state.go('overview');
});