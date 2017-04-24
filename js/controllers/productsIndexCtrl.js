console.log("ProductsIndexCtrl loaded");
VikingStore.controller('productsIndexCtrl', ['$scope', '$stateParams', 'productsService', 'categoriesService',
function($scope, $stateParams, productsService, categoriesService){
  $scope.products = productsService.getProducts();
  $scope.categories = categoriesService.getCategories();
}]);
