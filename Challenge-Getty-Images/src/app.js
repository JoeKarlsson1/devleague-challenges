var key = 'e9x98b5beckj8uu35zc6mfyg';

var imagesNode = document.getElementById('images');
var header = document.createElement('h3');

$(document).ready(function() {
  $('button').click(function() {

    var input = document.getElementById('imageInput').value;

    if (input === '' || input === undefined) {
      console.log('emtpy input')
      header.innerHTML = 'plz enter a valid search phrase - k thx';
      imagesNode.appendChild(header);
      throw new Error('plz enter a valid search phrase - k thx')
    }

    $.ajax({
        type : 'GET',
        url : 'https://api.gettyimages.com:443/v3/search/images?phrase=' + input,
        headers : {
          'Api-Key' : key
        },
        success : function(response) {
          console.log(response);
          renderImages(response.images);
        },
        error : function( error ) {
          // Log any error.
          console.log( 'ERROR:', error );
        },
        complete : function() {
          // When this completes, execute teh
          // DELETE request.
          console.log('Complete');
        }
      });
  });
});

function renderImages(images) {
  //clear previous translation from the DOM
  images.removeChild(images.firstChild);

  for (var i = images.length - 1; i >= 0; i--) {
    var imgNode = document.createElement('img');
    var titleNode = document.createElement('h6');
    var title = images[i];
    var image = images[i].display_sizes[0].uri;
    imgNode.src = image;

    titleNode.innerHTML = title;
    imgNode.appendChild(titleNode);
    imagesNode.appendChild(imgNode);
  };
}