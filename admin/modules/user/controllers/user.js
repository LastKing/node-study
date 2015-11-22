/**
 * Created by Rain on 2015/11/20.
 */
var UserCtrl = user.controller('UserCtrl', function ($scope, UserService) {
  $scope.title = '用户页面';

  dataFresh();

  $scope.remove = function (userId) {
    UserService.remove(userId).success(function (data) {
      Notify('删除成功', 'top-right', '3000', 'success', 'fa-bolt', true);
    });
    dataFresh();
  };


  function dataFresh() {
    UserService.getAll().success(function (data) {
      $scope.users = data.users;
    });
  }

});
