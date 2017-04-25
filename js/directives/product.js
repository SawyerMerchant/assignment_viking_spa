console.log("directives/product.js loaded");
VikingStore.directive('product', function() {
  return {
    templateUrl: '/js/directives/product.html',
    restrict: 'E',
    scope: {
      product: '=',
      find: '&',
    }
  };
});
