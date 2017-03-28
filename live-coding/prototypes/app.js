function Song(name){
  // Only bind properties in the constructor method
  this._name = name;
}

// Attach methods to the prototype
Song.prototype.play = function() {
    return 'playing';
}

function MetalSong(vol, name) {
  // super constructor
  Song.call(this, name);
  this._volume = vol;
};

MetalSong.prototype.play = function() {
    return 'playing Metal music';
}

var reignInBlood = new MetalSong(11, 'Reign In Blood Helicopter Death');

var realSong = new Song('Twinkle');

// applying the Metal Song constructor method to the song constructor method
// Same as extends in ES6
MetalSong.prototype = Object.create(Song.prototype, {
  constructor : MetalSong
});

console.log(Object.create(Song.prototype, {
  constructor : MetalSong
}))

// var reignInBlood = new MetalSong();
console.log(reignInBlood._name)
