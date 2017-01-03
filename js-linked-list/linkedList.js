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

  function _newNode( value) {
    return {
      value,
      next: null,
    }
  }

  //takes a new node and adds it to our linked list
  function _add( value ) {
    const newNode = _newNode( value );

    if ( _getHead() === null ) {
      _head  = newNode;
    } else {
      _getTail().next = newNode;
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
    let currNode = _getHead();
    let position = 0;
    if ( index < 0 ) {
      return false;
    }

    while ( position < index ) {
      if (currNode.next === null ) {
        return false;
      }
      currNode = currNode.next;
      position++;
    }
    return currNode;
  }

  /**
   * reads through our list and removes desired node
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _remove( index ) {
    let currNode = _get( index );
    let prevNode = _get( index -1 );
    let nextNode = currNode.next;

    // if the index is not in th LL
    if ( currNode === false ) {
      return false;
    }

    // removing the tail
    if ( nextNode === null ) {
      _tail = prevNode;
    }

    // If we are removing the head
    if ( index === 0 ) {
      // check if the head and the tail are the same node
      if (currNode.next === null ) {
        _head = null;
        _tail = null;
      }
      _head = nextNode;
    }

    // Happy path
    prevNode.next = nextNode;
  };

  /**
   * reads through our list and adds a new node in desired index
   * @param  {[type]} val   [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _insert( value, index ) {
    let currNode = _get( index );
    let prevNode = _get( index -1 );
    const newNode = _newNode( value );

    if ( currNode === false ){
      return false;
    }

    // if inserting at the head
    if ( index === 0 ) {
      newNode.next = currNode;
      _head = newNode;
    } else if ( currNode.next === null ) {
      prevNode.next = newNode;
      newNode.next = currNode;
      _tail = newNode;
    } else {
      prevNode.next = newNode;
      newNode.next = currNode;
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
