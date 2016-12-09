//declare global lastClicked Variable - this will save the last element selected.
var lastGridClicked;
var lastColorClicked;
var currentColor;
var paintMode= false;

//draw the clickable grid of size 30 x 30
var grid = new ClickableGrid(20, 25);

//Call makeGrid() to create a new DOM element
var gridDomElement = grid.makeGrid(function(el,row,col,i) {
  console.log('You clicked on element:', el);
  console.log('You clicked on id:', el.id);
  console.log('You clicked on row:', row);
  console.log('You clicked on col:', col);
  console.log('You clicked on item #:', i);

  //Set last clicked variable to this cell
  el.className = 'clickedGrid';
  if (lastGridClicked) lastGridClicked.className = '';
  //If clicked - set the current elements background color to the currently selected color
  el.style.background = currentColor;
  lastGridClicked = el;
  paintMode = true;
});

//create a new color swatch object
var colorGrid = new ColorSwatch(15, 5);

//Call makeSwatch() to create a new swatch DOM element
var swatchDomElement = colorGrid.makeSwatch(function(el,row,col,i) {
  //Set current color
  currentColor = el.color;

  console.log('You clicked on element:', el);
  console.log('You clicked on row:', row);
  console.log('You clicked on col:', col);
  console.log('You clicked on item #:', i);
  console.log('You clicked on color:', el.style.background);
  console.log('You clicked on color:', currentColor);

  el.className = 'clickedColor';
  if (lastColorClicked) lastColorClicked.className = '';
  //Set the currentColor variable to the selected color in the swatch
  lastColorClicked = el;
});

//Create clear all button
var clearAllBtn = document.createElement('button');
clearAllBtn.innerHTML = 'Clear All';
clearAllBtn.id = 'clearAll';
clearAllBtn.className = 'clearAll';
//Add clear all event listener to clear all button
clearAllBtn.addEventListener('click', function() {
  grid.clearAll();
});

//Create erase button
var eraseBtn = document.createElement('button');
eraseBtn.innerHTML = 'Erase';
eraseBtn.id = 'erase';
eraseBtn.className = 'erase';
//Add  erase event listener to the erase button
eraseBtn.addEventListener('click', function() {
  currentColor = 'white';
});

//Begin hover event
grid.onmouseover=function(){
    if(paintMode) {

    }
};

//Insert DOM elements into the DOM
document.body.appendChild(swatchDomElement);
document.body.appendChild(eraseBtn);
document.body.appendChild(clearAllBtn);
document.body.appendChild(gridDomElement);