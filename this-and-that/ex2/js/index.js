window.onload = function () {
  // add an event listener to the `child` class.
  // inspect the .css file
  // when a `child` class is clicked you code will add CSS styles which will show the
  // secret toy element. Click on an element will only show that element's toy, no one elses.
  //

  var childElements = document.getElementsByClassName('child');
  console.log(childElements);

  for (var I = 0; I < childElements.length; I++) {
    childElements[I].addEventListener('click', function() {
      this.className += '.show';
    });
  }
};