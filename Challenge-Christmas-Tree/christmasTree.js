var branch = 1;
var zeroes = "0";
var treeHTML = document.getElementById("tree");
var starHTML = document.getElementById("star");
var trunkHTML = document.getElementById("trunk");

treeHTML.innerHTML += "*";
function addBranches () {

  for ( var i = 1; i <= 10; i++ ) {

    if (i > 1) {
      branch +=2;
      while (zeroes.length <= branch) {
        zeroes += "0";
      }
    }

    treeHTML.innerHTML += "<br />" + zeroes;
  }
}
addBranches();
trunkHTML.innerHTML += "||";