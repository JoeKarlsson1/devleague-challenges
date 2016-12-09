require('./index.js');
const Promise = require('bluebird');
const Mongoose = Promise.promisifyAll(require('mongoose'));
Mongoose.Promise = require('bluebird');

const EnrolleeSchema = Mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  skype_username: String,
  track: String,
  coding_experience: String,
  reason: [ String ],
  bio: String,
  marketing_source: [ String ],
  scholarship: String,
  completed: { type: Boolean, default: false },
  enrollment_email_sent: { type: Boolean, default: false }
});

let Enrollee = Mongoose.model('Enrollee', EnrolleeSchema);

export default Enrollee;
