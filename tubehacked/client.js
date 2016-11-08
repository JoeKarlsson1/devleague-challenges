const request = require('request');
console.log('hit: ');
request
  .post('http://10.0.1.2:8081/bouncer', { form: {
    username: 'joejoebinks3',
    guess: 20,
    video_id: 'OlkHHOJ64SU',
  }})
  .on('response', function(response) {
    console.log(response.statusCode) // 200
    console.log(response.body) // 'image/png'
  })
  .on('error', function(error) {
    console.log(error);
  })
