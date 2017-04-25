console.log("categoriesService loaded");
VikingStore.factory('categoriesService', ['productsService', function(productServices){
  var _categories = [];
  var _id = 1;

  var _makeCategories = function(){
    var categories = [
      {
        "id": 1,
        "name": "Bikes",
        "productIDs": [1,3,5]
      },
      {
        "id": 2,
        "name": "Tires",
        "productIDs": [2,4,6]
      },
      {
        "id": 3,
        "name": "Seats",
        "productIDs": [7,9,11]
      },
      {
        "id": 4,
        "name": "Handlebars",
        "productIDs": [8,10,12]
      }
    ];
    categories.forEach(function(category){
      _extend(category);
    });
    _categories = categories;
  };

  var _extend = function(category) {
    category.products = function() {
      var products = [];
      this.productIDs.forEach(function(productId) {
        var product = productService.find(productId);
        products.push(product);
      });
      return products;
    };
  };

  var getCategories = function(){
    if(!_categories.length){
      _makeCategories();
    }
    return _categories;
  };

  return {
    getCategories: getCategories,
  };

}]);
