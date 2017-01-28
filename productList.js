//an example of a factory function
function makeProduct(id, name, price ){
  return{
    id: id,
    name: name,
    price: price,
  };
}
//a function for making an array/list of products
function makeProductList(){
  // how many?
  
  var products = [];
  
  return{
    add: function(product){
      products.push(product);
    },
    remove: function(id){
        // find the index of the product with that id
        // remove the product at that index
    },
    
  }
  // "crud" operations create read update delete
  // add product?
  // remove product?
  // update product?
  // find/get product by id?
}

var productList = makeProductList();

for(var i = 0; i < 100; i ++){
  var prod = makeProduct(i, "Sweet Phone", i * 3);
  productList.add(prod);
}


////////////////////////////////////////////////////

