/**
 * Created by Rain on 2015/11/20.
 */
var RootCtrl = root.controller('RootCtrl', function ($scope, $state, $http) {
  var adminMenu = [
    {
      name: '概览',
      icon: 'menu-icon fa fa-home',
      route: 'overview'
    },
    {
      name: '用户管理',
      icon: 'menu-icon fa fa-user',
      route: 'user'
    },{
      name: '用户管理',
      icon: 'menu-icon fa fa-user',
      children: [
        {
          name: '模型管理',
          icon: 'menu-icon fa fa-home',
          route: 'resource.model'
        },
        {
          name: '场景管理',
          icon: 'menu-icon fa fa-home',
          route: 'resource.scene'
        }
      ]

    }
  ];

  //如果没有指定路径,直接跳转到 /overview 路由,因为Root控制器只提供一个外部框架包装,并不提供具体功能
  if ($state.current.name == 'root')
    $state.go('overview');

  //获取当前登录的用户,并赋值到currentUser变量中,子路由也能通过currentUser来访问
  //按照道理这里不应该这么写的,应该写成service,但是功能很简单就没这么干了
  $.ajax({
    type: "get",
    url: "/auth/getCurrentUser.do",
    async: false,
    success: function (data) {
      var user = eval('(' + data + ')');
      if (user.result == -1) {
        Notify('你的登录已失效,请重新登录', 'top-right', '5000', 'danger', 'fa-bolt', true);
        setTimeout(function () {
          window.location.href = "index.html";
        }, 1000);
      } else {
        switch (user.role) {
          case 'admin':
            $scope.menu = adminMenu;
            break;
          case 'merchant':
            var merchantId = {};
            merchantMenu[1].route += '({merchantId:"' + user.id + '"})';
            $scope.menu = merchantMenu;
            break;
        }
        $scope.currentUser = user;
      }
    }
  });

  /**
   * 登出函数
   */
  $scope.logout = function () {
    $http.post('/auth/logout.do', {}).success(function () {
      window.location.href = "index.html";
    });
  }


});