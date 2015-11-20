/**
 * Created by Rain on 2015/11/20.
 */
var UserCtrl = user.controller('UserCtrl', function ($scope) {
  $scope.title = '用户页面';

  $scope.users = [
    {userName: '张三', age: '18', email: 'litaixin01@163.com'},
    {userName: '张三', age: '18', email: 'litaixin01@163.com'},
    {userName: '张三', age: '18', email: 'litaixin01@163.com'},
    {userName: '张三', age: '18', email: 'litaixin01@163.com'},
    {userName: '张三', age: '18', email: 'litaixin01@163.com'}
  ]
});
