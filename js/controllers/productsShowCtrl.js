console.log("productsShowCtrl loaded");
VikingStore.controller('productsShowCtrl', ['$scope', '$stateParams', 'productsService', 'categoriesService',
function($scope, $stateParams, productsService, categoriesService){

  console.log("$stateParams");
  if ($stateParams.productID) {
    $scope.product = productsService.find($stateParams.productID);
  }

}]);
