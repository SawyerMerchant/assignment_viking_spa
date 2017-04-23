VikingStore.factory('productServices', ['$http', '_', function($http, _){
  var _products = [];
  var _id = 1;
  var SEED_COUNT = 10;

  var populateProducts = function() {
    for (var i = 0; i < SEED_COUNT; i++){
      _makeBikes();
      _makeTires();
      _makeSeats();
      _makeHandlebars();
    }
  };

  var _makeBikes = function(){
    product = {
      title: faker.commerce.productName(),
      color: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productAdjective(),
      text: faker.commerce.product(),
      price: faker.commerc.price(),
      image: faker.image.transport(),
      id: _id,
      category: 1,
    };
    _id++;
    _products.push(product);
  };

  var _makeTires = function(){
    product = {
      title: faker.commerce.productName(),
      color: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productAdjective(),
      text: faker.commerce.product(),
      price: faker.commerc.price(),
      image: faker.image.transport(),
      id: _id,
      category: 2,
    };
    _id++;
    _products.push(product);
  };

  var _makeSeats = function(){
    product = {
      title: faker.commerce.productName(),
      color: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productAdjective(),
      text: faker.commerce.product(),
      price: faker.commerc.price(),
      image: faker.image.transport(),
      id: _id,
      category: 3,
    };
    _id++;
    _products.push(product);
  };

  var _makeHandlebars = function(){
    product = {
      title: faker.commerce.productName(),
      color: faker.commerce.color(),
      material: faker.commerce.productMaterial(),
      description: faker.commerce.productAdjective(),
      text: faker.commerce.product(),
      price: faker.commerc.price(),
      image: faker.image.transport(),
      id: _id,
      category: 4,
    };
    _id++;
    _products.push(product);
  };

}]);
