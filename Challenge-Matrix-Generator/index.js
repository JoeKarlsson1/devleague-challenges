matrixGenerator(3, 3, randomNumberGenerator).next().value;

function* matrixGenerator (col = 10, row = 10, generator) {
  while (true) {
    yield [...take(row, arrayGenerator(col, generator))];
  }
}

function* arrayGenerator (length = 10, generator) {
  while (true) {
    yield [...take(length, generator())];
  }
}

function* randomNumberGenerator(min = 0, max = 100) {
  while (true) {
    yield Math.floor(Math.random() * (max - min)) + min;
  }
}

function* take (n, iterable) {
  for (let x of iterable) {
    if (n <= 0) return;
    n--;
    yield x;
  }
}