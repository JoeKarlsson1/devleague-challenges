window.onload = function () {
  // add an event listener to each li element inside of the nav menu.
  // Make it listen for a Click event
  // this event should log to the console the text inside of the <a> tag
  // the event should only log one word per click.
  //
  //

  var navLink = document.getElementsByClassName('navLink');

  //console.log(navLink);

  for (var I = 0; I < navLink.length; I++) {
    navLink[I].addEventListener('mouseover', function() {
      console.log(this.textContent);
    });
  }

  var testButtons = document.getElementsByClassName('testButton');

  for (var I = 0; I < testButtons.length; I++) {
    testButtons[I].testButtonClick('click');
  }

  function testButtonClick(evt) {
      console.log(this.textContent);
    }

};