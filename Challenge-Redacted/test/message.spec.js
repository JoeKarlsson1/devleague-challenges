var request = require('supertest');
var app = require('../server.js');

describe('message routes', function() {
  describe('POST /message', function() {
    it('should return a message with blacklist words replaced', function(done) {
      var body = {
        message : 'I took a selfie with my bae next to a tardis. yolo!'
      };

      request(app)
        .post('/message')
        .type('form')
        .send(body)
        .expect({ 'message' : 'I took a self-portrait with my loved one next to a tardis. carpe diem!' })
        .expect(200)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});
