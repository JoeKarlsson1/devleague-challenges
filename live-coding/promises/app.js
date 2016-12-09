const fs = require('fs');
const fetch = require('node-fetch');
const Promise = require('bluebird');
Promise.promisifyAll(fs);

// // Without promises
// fs.readFile('./data.json', (err, data) => {
//   if(err) {
//     console.error('Unable to read file');
//   } else {
//     try {
//       const val = JSON.parse(data);
//       console.log(val);
//     }
//     catch(e) {
//       console.error('Invalid JSON in file');
//     }
//   }
// });

// With Promises
fs.readFileAsync('./data.json')
  .then(JSON.parse)
  .then(console.log)
  .catch(SyntaxError, (err) => {
    console.error('Invalid JSON in file');
  })
  .catch((err) => {
    console.error('Unable to read file');
  });

// fetch('https://reddit.com/r/aww.json')
//   .then((data) => {
//     return data.json()
//   })
//   .then(console.log)
//   .catch((err) => {
//     console.error('Unable to to read URL')
//   })