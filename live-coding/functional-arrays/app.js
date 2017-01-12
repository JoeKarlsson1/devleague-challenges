const summerizer = (prev, curr, i, array) => {
  return prev + curr
}

const arr = [ '1','2','3','4','5','6','7'];

const result = arr.reduceRight(summerizer, '0' );

console.log('result: ', result); // 21