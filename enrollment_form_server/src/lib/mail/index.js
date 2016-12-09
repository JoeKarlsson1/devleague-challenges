import SendGrid from 'sendgrid';
const CONFIG = require('./../../../config');

const ENVIRONMENT = CONFIG[ process.env.NODE_ENV || 'DEVELOPMENT' ];

const mailClient = SendGrid(ENVIRONMENT.SENDGRID.API_KEY);

// enrollee is a document from mongo
function sendCompletedEnrollmentLetter(enrollee) {
  return new Promise(function(resolve, reject) {

    let request = mailClient.emptyRequest({
      method: 'POST',
      path: `/v3/mail/send`,
      body: {
        template_id: ENVIRONMENT.SENDGRID.TEMPLATES.ENROLLMENT_ID,
        personalizations: [{
          to: [{
            email: enrollee.email
          }],
          substitutions: {
            "%first_name%": enrollee.first_name
          },
        }],
        from: {
          email: "rayrfarias@gmail.com",
          name: "Ray R Farias"
        }
      }
    });

    mailClient.API(request)
      .then(response => {
        return resolve();
      })
      .catch(error => {
        // TODO logging?!
        return reject();
      })
    ;
  });
}

export default {
  sendCompletedEnrollmentLetter
};
