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

  function _newNode(value) {
    return {
      value,
      next: null,
    };
  }

  //takes a new node and adds it to our linked list
  function _add( value ) {
    const node = _newNode(value);

    // init empty LL
    if(_getHead() === null){
      _head = node;
    } else { // if it's not empty
      _getTail().next = node;
    }
    // Happy Path
    _tail = node;
    return node;
  }

  /**
   * Reads through our list and returns the node we are looking for
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _get( index ) {
    let currNode = _getHead();
    let postion = 0;

    // If index is less than 0, return false
    if (index < 0) {
      return false;
    }

    // Loop through all the nodes
    while( postion < index ) {

      // Check if we hit the end of the LL
      if ( currNode.next === null ){
        return false;
      }

      // If node exists go to next node
      currNode = currNode.next;
      postion++;
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
    let prevNode = _get(index - 1);

    // If index not in LL, return false
    if (currNode === false) {
      return false;
    }

    // If removing the head, reassign the head to the next node
    if ( index === 0) {
      _head = currNode.next;
    }

    // If removing the tail, reassign the tail to the prevNode
    if (currNode.next === null) {
      _tail = prevNode;
    }

    // Happy Path
    prevNode.next = currNode.next;
  };

  /**
   * reads through our list and adds a new node in desired index
   * @param  {[type]} val   [description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  function _insert( value, index ) {
    let currNode = _get( index );
    let prevNode = _get( index - 1 );
    let node = _newNode( value );

    // If index not in LL, return false
    if ( currNode === false ) {
      return false;
    }

    // If inserting at the head, reassign the head to the new node
    if ( index === 0 ){
      _head = node;
      node.next = currNode;
    } else {

      //If inserting at the tail, reassign the tail
      if (currNode.next === null) {
        _tail = node;
      }
      node.next = currNode;
      prevNode.next = node;
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
