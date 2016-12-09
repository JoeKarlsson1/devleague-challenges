/**
 * Long Form Christmas Console Tree Function
 * @param  {[num]} height of christmas tree.
 */
function makeConsoleTree(height) {
  i = h = height;
  a = new Array(h);
  a[0] = a.join(' ');
  b = a.join('000');
  a[0] += '*';
  while ( i >= 0 ) {
    a[i--] = b.substr(i, h + i);
  }
  console.log(a.join('\n'))
}

makeConsoleTree(9);