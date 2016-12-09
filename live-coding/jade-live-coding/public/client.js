var requestTest = document.getElementById('requestTest');

function onLoad(data) {
  var field = document.createElement('p');
  field.innerHTML = this.responseText;
  requestTest.appendChild(field);
}

var xhrButton = document.getElementById('xhrButton');

xhrButton.addEventListener('click', function(event){
  var clientReq = new XMLHttpRequest();
  clientReq.addEventListener('load', onLoad)
  clientReq.open('GET', '/message');
  clientReq.send();
})