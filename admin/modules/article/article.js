/**
 * Created by Rain on 2015/12/16.
 */

var article = angular.module('article', ['ui.router', 'ui.router.stateHelper']);

article.config(function ($stateProvider) {
  var baseUrl = "modules/article";
  var templatesBaseUrl = baseUrl + "/templates";
  var controllersBaseUrl = baseUrl + "/controllers";
  var servicesBaseUrl = baseUrl + "/services";

  $stateProvider.state({
    name: 'article',
    url: '/article',
    parent: 'root',
    templateUrl: templatesBaseUrl + '/article.html',
    controller: 'ArticleCtrl',
    resolve: {
      articleModule: dependencies('article', [
        controllersBaseUrl + '/article.js',
        servicesBaseUrl + '/article.js'
      ])
    }
  });

});