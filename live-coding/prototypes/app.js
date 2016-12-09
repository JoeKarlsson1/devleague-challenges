//Constructor logic to set object properties, NOT prototype properties
function Song(){
  // this.play = function() {
  //   return 'Hi-jacked';
  // }
}

Song.prototype.play = function() {
  return 'playing';
}

var song = new Song(); //invoked as constructor
// console.log('song.play: ', song.play()); //hi-jacked

function MetalSong(title, length){
  this.title = title
  this.length = length
  this.volume = 11;
}

MetalSong.prototype = Object.create(Song.prototype);

let theBloodRunsRedMurderTown = new MetalSong('the Blood Runs Red Murder Town');

console.log(theBloodRunsRedMurderTown.play()); //playing

function DeathMetalSong(title, length) {
  MetalSong.call(this, title, length)
  this.volume = Infinity;
}

DeathMetalSong.prototype = Object.create(MetalSong.prototype);

var rainInBlood = new DeathMetalSong('rain In Blood', 4);
console.log('rainInBlood.volume: ', rainInBlood.volume);

Array.prototype.forEach = function() {

}
