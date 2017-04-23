var VikingStore = angular.module('VikingStore', ['ui.router']);

VikingStore.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/products");

  $stateProvider

    .state('products', {
      url: "/products",
      template: "<h1>Products</h1><ui-view></ui-view>",
      abstract: true,
    })

    .state('products.index', {
      url: "",
      templateUrl: "partials/productsIndex.html",
      controller: "ProductsIndexCtrl"
    })

    .state('products.show', {
      url: "/:productID",
      templateUrl: "partials/productsShow.html",
      controller: "ProductsShowCtrl"
    });

});

VikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);
