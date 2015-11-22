/**
 * Created by Rain on 2015/11/20.
 */
var UserCtrl = user.controller('UserCtrl', function ($scope, UserService) {
  $scope.title = '用户页面';

  UserService.getAll().success(function (data) {
    $scope.users = data.users;
    console.log(data);
  });


});
