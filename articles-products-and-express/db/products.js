module.exports = (function(){
  var productList = [];


  function _all () {
    return productList;
  }

  function _getById (id) {
    for(var i = 0; i < productList.length; i++) {
      if(productList[i].id === parseInt(id)){
        return productList[i];
      }
    }
  }

  function _add (req, callback) {

    var inventory = req.inventory;
    var name = req.name;
    var price = req.price;
    var id = productList.length + 1;

    for( var i = 0; i < productList.length; i++ ) {
      if( productList[i].name === name ) {
        var err = new Error("Could not create new product");
        return callback(err);
      }
    }

    var pObj = {
      'inventory' : inventory,
      'name' : name,
      'price' : price,
      'id' : id
    };

    productList.push(pObj);
    return callback(null);
  }

  function _editById (id, productOptions, callback) {
    var updateP = null;
    for ( var i = 0; i < productList.length; i++) {
      if( productList[i].id === parseInt(id) ) {
        updateP = productList[i];
        for(var key in productOptions) {
          updateP[key] = productOptions[key];
        }
          return callback(null);
      } else {
        callback(new Error("Can't find ID"));
      }
    }
  }


  function _deleteById (id, callback) {
    for ( var i = 0; i < productList.length; i++) {
      if( productList[i].id === parseInt(id) ) {
        productList.splice(i,1);
        return callback(null);
      } else {
        callback(new Error("Can't find ID"));
      }
    }
  }

  return {
    all: _all,
    add: _add,
    getById: _getById,
    editById: _editById,
    deleteById: _deleteById
  };
}());