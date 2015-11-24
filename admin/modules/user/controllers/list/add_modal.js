/**
 * Created by Rain on 2015/11/24.
 */
user.controller('UserAddModal', function ($modalInstance, $scope, UserService) {
  $scope.title = '用户添加';

  $scope.registered = function () {
    if ($scope.addUser.$invalid) {
      UserService.add($scope.user).success(function (data) {
        if (data.result == 0) {
          Notify('添加成功', 'top-right', '3000', 'success', 'fa-bolt', true);
          $modalInstance.close();
        } else {
          Notify('添加失败!~!~' + data.reason, 'top-right', '3000', 'danger', 'fa-bolt', true);
        }
      });
    } else {
      Notify('添加用户信息有误!~!~', 'top-right', '3000', 'danger', 'fa-bolt', true);
    }
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});