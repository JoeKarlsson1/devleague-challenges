# Recursive Tree Traversal
Build a Class with methods that can traverse a tree. Each method should return a different collections of data from the data tree.

###Methods:
1. `getAllNames` returns an Array with all of the values of the Name property for each and every node. e.g. `["Tom", "Dick", "Harry"]`
2. `getAllAges` returns an Array with all of the values of the Age property for each and every node. e.g. `[9, 8, 7, 6]`
3. `getLeafNames` returns an Array with only the values of the Name property from nodes that are leafs. *A leaf node is an object with no children nodes.*
4. `getLeafAges` returns an Array with only the values of the Age property from nodes that are leafs.
5. `findAllParentsNames` returns an array of names that belong to all non-leaf nodes.
6. `findAllParentsAges` returns an array of ages that belong to all non-leaf nodes.
7. `findName(String)` finds a node by it's name property and returns that entire object. e.g. `{name: 'Roger Moore', has_parent: true, is_leaf: false, children: []}`
8. `findAge` do not implement this but please declare it on the Traverse prototype chain so that the first few tests pass.

This tree is in `JSON` format.

**An example of a node inside of the tree:**

````
{
  name: "Roger Moore",  // have a String with a name value, e.g. "Russel"
  has_parent: null,   // can be of True, False, or Null values.
  has_children: true, // Boolean, if True then the children property Array will be populated
  children: [     // An Array of Objects that look contain more nodes.
    {         // Nodes are objects that look similar to this object.
      name: "Sean Connery",
      has_parent: true,
      has_children: false,
      children: []
    }
  ]
}
    
````
# Get Started
1. fork and clone this repo
2. run the command `npm install`
3. run `gulp` to keep your tasks running
4. do work inside of `traverse.js`
5. make each test pass in order (important as some tests rely on working code)
