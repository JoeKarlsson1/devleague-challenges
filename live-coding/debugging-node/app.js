function floop (i) {
  if (i > 0) {
    var decrementer = 10;
    while( decrementer-- > 0 ){
      i--;
    }
    floop(i);
  }
  return i;
}

floop(50);