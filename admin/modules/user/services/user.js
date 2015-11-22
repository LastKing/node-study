/**
 * Created by Rain on 2015/11/22.
 */
user.service('UserService', function ($http) {

  this.getAll = function () {
    return $http.get('/user/getAll.do');
  }

});