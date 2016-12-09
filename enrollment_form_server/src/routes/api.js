import Express from 'express';
const Router = Express.Router();

import Enrollee from './../models/Enrollee';
import Contact from './../models/Contact';

import Email from './../lib/mail';

Router.route('/enroll')
  .get((req, res) => {
    console.log('hit: ');
    let newEnrollee = new Enrollee({});

    newEnrollee.save()
      .then(doc => res.json({ _id: doc._id }))
      .catch(error => {
        res.status(500).send({ message: 'initialization error' });
      })
    ;
  })

  // update document
  .put((req, res) => {
    let enrolleeId = req.body._id;
    let updateFields = Object.assign({}, req.body);

    delete updateFields._id;

    Enrollee.findByIdAndUpdate(enrolleeId, updateFields).exec()
      .then(doc => {

        if (req.body.completed && !doc.enrollment_email_sent) {
          Email.sendCompletedEnrollmentLetter(doc)
            .then(function(){
              Enrollee.findByIdAndUpdate(enrolleeId, { enrollment_email_sent: true });
            })
            .catch(function(error){
              // TODO logging?!
              console.log(error);
            })
          ;
        }

        return res.json({success: true, doc: doc});
      })
      .catch(err => {
        return res.status(500).send({ message: 'upsert error' });
      })
    ;
  });

Router.route('/contact')
.get((req, res) => {
  Contact.find()
  .sort('-date')
  .exec()
  .then((result) => {
    res.json(result);
  })
})
.post((req, res) => {
  let newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  })

  newContact.save()
  .then(doc => res.json({ doc }))
  .catch(error => {
    res.status(500).send({ message: 'initialization error' });
  });
});

export default Router;
