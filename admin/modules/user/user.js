/**
 * Created by Rain on 2015/11/20.
 */
var user = angular.module('user', ['ui.router', 'ui.router.stateHelper']);

user.config(function ($stateProvider) {
  var baseUrl = "modules/user";
  var templatesBaseUrl = baseUrl + "/templates";
  var controllersBaseUrl = baseUrl + "/controllers";
  var servicesBaseUrl = baseUrl + "/services";

  $stateProvider.state({
    name: 'user',
    url: '/user',
    parent: 'root',
    templateUrl: templatesBaseUrl + '/list.html',
    controller: 'UserCtrl',
    resolve: {
      userModule: dependencies('user', [
        controllersBaseUrl + '/list.js',
        servicesBaseUrl + '/user.js',
        controllersBaseUrl + '/list/add_modal.js'
      ])
    }
  });

});