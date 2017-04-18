
const fs = require('fs');

// Node Streams way to clone a file
const readable = fs.createReadStream('catz.jpg')

readable.on('readable', () => {
  console.log(readable.read());
});

readable.on('end', () => {
  console.log('Readable string ended');
});

const writable = fs.createWriteStream('catz_clone.jpg');



// All the data from readable goes into 'catz_clone.jpg'
readable.pipe(writable);

// Read File way to clone a file
fs.readFile('catz.jpg', (err, data) => {
  if(err) {
    throw new Error('Bad image data');
  }
  fs.writeFile('catz_clone2.jpg', data, (err) => {
    if(err) {
      throw new Error('Bad image data');
    }
    console.log(data);
  })
});
