/**
 * [ShoppingList description]
 */
function ShoppingList() {
  this._items = [];
}

/**
 * Adds and item to the shopping list
 * @param {ShoppingListItem} item [description]
 */
ShoppingList.prototype.addItem = function(item) {
  if (item instanceof ShoppingListItem) {
    this._items.push(item);
    return this._items.length - 1;
  } else {
    throw new Error('wrong item type');
  }
};

ShoppingList.prototype.removeItem = function(item) {
  if (item === null) {
    if (this._items.length > 0)
      this._items.pop();
    else
      return false;
  } else if (item instanceof ShoppingListItem) {
    var index = this._items.indexOf(item);
    if (index >= 0)
      this._items.splice(index, 1);
    else
      return false;
  } else {
    throw new Error('wrong item type');
  }
  return true;
};