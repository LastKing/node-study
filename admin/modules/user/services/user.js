/**
 * Created by Rain on 2015/11/22.
 */
user.service('UserService', function ($http) {

  this.add = function (user) {
    return $http.post('/user/add.do', user);
  };

  this.remove = function (userId) {
    return $http.post('/user/remove.do', {userId: userId});
  };

  this.getAll = function () {
    return $http.get('/user/getAll.do');
  };

});