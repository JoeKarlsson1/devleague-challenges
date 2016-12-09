/**
 * [ColorSwatch description]
 * @param {[type]} rows [description]
 * @param {[type]} cols [description]
 */
function ColorSwatch(rows, cols) {
  this._rows = rows;
  this._cols = cols;

  this.colors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','Darkorange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DimGrey','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed','Indigo','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSlateGrey','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','SlateGrey','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen'];
}

/**
 * [makeSwatch description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
ColorSwatch.prototype.makeSwatch = function( callback ) {
  var i = 0;
  var swatch = document.createElement('table');
  swatch.className = 'swatch';
  for (var r = 0; r < this._rows; ++r) {
    var tr = swatch.appendChild(document.createElement('tr'));
    for (var c = 0; c < this._cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      color = this.colors[++i];
      cell.style.background = color;
      cell.color= color;
      //cell.innerHTML = this.colors[++i];
      cell.addEventListener('click', (function(el,r,c,i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
    }
  }
  return swatch;
}
