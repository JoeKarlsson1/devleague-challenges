/**
 * [ShoppingListItem description]
 * @param {[type]} name        [description]
 * @param {[type]} description [description]
 */
function ShoppingListItem( name, description ) {
  this._name = name;
  this._description = description;
  this._isDone = false;

} // end of ShoppingListItem

ShoppingListItem.prototype.check = function () {
    this._isDone = true;
}

ShoppingListItem.prototype.uncheck = function() {
    this._isDone = false;
}

ShoppingListItem.prototype.render = function() {
    //TODO
}
