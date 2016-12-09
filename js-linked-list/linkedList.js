/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

// var eyes = require('eyes')

function linkedListGenerator() {
  let _head = null;
  let _tail = null;

  //points to our head
  function _getHead() {
    return _head;
  }

  //points to our tail
  function _getTail() {
    return _tail;
  }

  //takes a new node and adds it to our linked list
  function _add( value ) {
    const newNode = {
      value,
      next: null,
    }
    if(!_head){
      _head = newNode;
    } else {
      _tail.next = newNode;
    }
    _tail = newNode;
    return newNode;
  }

  /**
   * Reads through our list and returns the node we are looking for
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _get( index ) {
    let currNode = _head;
    let currPosition = 0;

    // if index is less than zero - than return false
    if ( index < 0 ) {
      return false;
    }

    while( currPosition < index ) {
      if ( currNode.next === null) {
        return false;
      }
      currNode = currNode.next;
      currPosition++;
    }
    return currNode;
  }

  /**
   * reads through our list and removes desired node
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _remove( index ) {
    let currNode = _get(index);
    let prevNode = _get(index-1);

    // If currNode is not in the linked List - return false
    if (currNode === false) {
      return false;
    }

    // If index is the tail - reassign the tail to prevNode
    if ( currNode.next === null) {
      _tail = prevNode;
    }

    // If removing the head
    if( index === 0 ) {

      // If the tail and the head are the same - assign head and tail to null
      if( currNode.next === null) {
        _head = null;
        _tail = null;
      } else {

        // Case where removing head with a LL with more than one item
        _head = _head.next;
      }
    }

    // Happy path - assign prev.net to currNode.next
    // Deletes the node at index
    prevNode.next = currNode.next;
  };

  /**
   * reads through our list and adds a new node in desired index
   * @param  {[type]} val   [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _insert( value, index ) {
    let currNode = _get(index);
    let prevNode = _get(index-1);
    let newNode = {
      value,
      next: null
    };

    // if inserting at an index greater than the length of the LL
    if (currNode){
      console.log('currNode: ', currNode);
      // if inserting at the head
      if(index === 0){
        newNode.next = _head;
        _head = newNode;
      } else {
        prevNode.next = newNode;
        newNode.next = currNode;
      }

      // if inserting at the tail
      if(currNode.next === null){
        _add(value);
      }

    } else {
      return false;
    }
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };
}

var books = linkedListGenerator();
books.add('Notebook');
books.add('Harry Potter');
books.add('FaceBook');
console.log('books: ', books.getHead());
