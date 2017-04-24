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
      controller: "productsIndexCtrl"
    })

    .state('products.show', {
      url: "/:productID",
      templateUrl: "partials/productsShow.html",
      controller: "productsShowCtrl"
    });

});

VikingStore.factory('_', ['$window', function($window) {
  return $window._;
}]);

// This is for error handling
// It sets an event listener on the root scope from which all
//    other $scopes descend
//    and it outputs whatever loggable errors are happening
//    when an error in ui-router states takes place
// It should be availably by default, but it isn't.
VikingStore.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
