/**
* Creates a clickable grid
* @param  {[int]}   rows     Number of rows in the clickable grid
* @param  {[int]}   cols     Number of columns in the clickable grid
*/
function ClickableGrid(rows, cols) {
  this._rows = rows;
  this._cols = cols;
}

/**
* Creates a clickable grid
* @param  {Function} callback Async callback function
* @return {[DOM clickable grid ]}            DOM element
*/
ClickableGrid.prototype.makeGrid = function( callback ) {
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < this._rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < this._cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.id = "grid" + i++

      //cell.innerHTML = ++i;
      cell.addEventListener('click', (function(el,r,c,i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
      cell.addEventListener('mouseover', function() {

      })
    }
  }
  return grid;
}

/**
 * Clears all the cells in the clickable grid to white
 */
ClickableGrid.prototype.clearAll = function() {
  var i = 0;
  for ( var r = 0; r < this._rows; ++r ) {
    for ( var c = 0; c < this._cols; ++c ) {
      var gridID = 'grid' + i;
      var cell = document.getElementById( gridID );
      cell.style.background = 'white';
      i++;
    }
  }
}
