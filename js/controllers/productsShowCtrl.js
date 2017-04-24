console.log("productsShowCtrl loaded");
VikingStore.controller('productsShowCtrl', ['$scope', '$stateParams', 'productsService', 'categoriesService',
function($scope, $stateParams, productsService, categoriesService){
  $scope.products = productsService.getProducts();
  $scope.categories = categoriesService.getCategories();
}]);
