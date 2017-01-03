//Constructor logic to set object properties, NOT prototype properties
function Song(){
  this.title = 'Hello Sun'
  this.volume = 6;
}

Song.prototype.play = function() {
    return 'playing';
}

function MetalSong(vol){
    //like ES6 super call - attaches parent properties to this constrcutor
    Song.call(this);
    this.volume = vol;
}

// extend the song prototype
MetalSong.prototype = Object.create(Song.prototype, {
  constructor : MetalSong
});

var reignInBlood = new MetalSong(12);

console.log(reignInBlood.title);