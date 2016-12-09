var expect = chai.expect;
var should = chai.should();

// ======================== ShoppingListItem ==========================

var item;
beforeEach(function() {
  item = new ShoppingListItem('item', 'description');
});

describe('ShoppingListItem', function() {
  it('should be a class', function() {
    ShoppingListItem.should.be.a('function');
    expect(item).to.be.instanceof(ShoppingListItem);
  });

  it('should have a property "_name"', function() {
    expect(item).has.property('_name');
  });

  it('should have a property "_description"', function() {
    item.should.have.property('_description');
  });

  it('should have a property "_isDone"', function() {
    item.should.have.property('_isDone');
  });

  it('should have a constructor with two arguements', function() {
    expect(ShoppingListItem.prototype.constructor).to.be.a('function');
    expect(ShoppingListItem.prototype.constructor.length).to.equal(2);
  });

  it('should create a new instance with a name and a description', function() {
    item.should.have.property('_name');
    item.should.have.property('_description');
  });

  //check()
  describe('check()', function() {
    it('should set its is_done property to true', function () {
      item._isDone.should.equal.true;
    });
  });

  //uncheck()
  describe('uncheck()', function() {
    it('should set its is_done property to false', function () {
      item._isDone.should.equal.false;
    });
  });

  //render()
  describe('render()', function() {
    it('ShoppingListItem render method returns HTML with the item\'s name and description', function() {
      var str = item.render(0);
      expect(str).to.have.string('<li id="item0" class="completed_false"><input type="checkbox"><span>'
        + item.name + ': </span><span>' + item.description + '</span>');
    });
  });

});

// ======================== ShoppingList==========================

describe('ShoppingList', function() {
  var list, item;
  beforeEach(function() {
    list = new ShoppingList();
    item = new ShoppingListItem('item', 'test');
  });

  it('should be a class', function() {
    ShoppingList.should.be.a('function');
    expect(list).to.be.instanceof(ShoppingList);
  });

  //items
  describe('items', function() {
    it('should have a property "_items"', function() {
      list.should.have.property('_items');
    });

    it('should be initalized to an empty array', function() {
      expect(list._items).to.be.instanceOf(Array);
      expect(list._items).to.be.empty;
    });

  });

  // addItems(item)
  describe('addItems()', function() {
    it('should take an arguement', function() {
      expect(ShoppingList).respondTo('addItem');
      expect(ShoppingList.prototype.addItem).to.have.length(1);
    });

    it('should add object to the items array', function() {
      expect(list.addItem(item)).to.eql(0);
      expect(list._items).to.have.length(1);
    });

    it('should throw an error if an non shopping list item is entered', function() {
      expect(list.addItem).to.throw(Error);
    });
  });

  //removeItems('item')
  describe('removeItem()', function() {

    it('should take an argument', function() {
      expect(ShoppingList).respondTo('removeItem');
      expect(ShoppingList.prototype.removeItem).to.have.length(1);
    });

    it('removeItem removes a ShoppingListItem from items Array if its present', function() {
      list.addItem(item);
      expect(list.removeItem(null)).to.be.true;
      expect(list._items).to.have.length(0);
    });

    it('ShoppingList\'s removeItem throws an error if item is not a ShoppingListItem', function() {
      expect(list.removeItem).to.throw(Error);
    });

  });

  //render()
  describe('render()', function() {
    it('should return a HTML list of each of the items', function() {
      var str = list.render();
      expect(str).to.have.string('<ul><li');
      expect(str).to.have.string('/li><ul>');
    });
  });

});

