console.log("categoriesService loaded");
VikingStore.factory('categoriesService', ['productsService', function(productServices){
  var _categories = [];
  var _id = 1;

  var _makeCategories = function(){
    var categories = [
      {
        "id": 1,
        "name": "Bikes",
        "productIDs": []
      },
      {
        "id": 2,
        "name": "Tires",
        "productIDs": []
      },
      {
        "id": 3,
        "name": "Seats",
        "productIDs": []
      },
      {
        "id": 4,
        "name": "Handlebars",
        "productIDs": []
      }
    ];
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
