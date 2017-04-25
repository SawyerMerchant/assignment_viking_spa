console.log("categoryFilter loaded");
VikingStore.filter('categoryFilter', function(){
  return function(products, category){
    if (!category) {return products;}
    var filteredProducts = [];

    angular.forEach(products, function(product){
      if (category.productIDs.includes(product.id)){
        filteredProducts.push(product);
      }
    });
    return filteredProducts;
  };
});
