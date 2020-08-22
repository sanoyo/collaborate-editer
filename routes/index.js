const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Code4Share - a platform for sharing code.' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Code4Share - a platform for sharing code.'});
});

router.route('/contact')
  .get(function(req, res, next) {
    res.render('contact', { title: 'Code4Share - a platform for sharing code.'});
  })
  .post(function(req, res, next) {
    req.checkBody('name', 'Empty Name').notEmpty();
    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('message', 'Empty Message').notEmpty();
    var errors = validationResult(req);

    if(errors) {
      res.render('contact', {
        title: 'Code4Share - a platform for sharing code.',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    } else {
      res.render('thank', { title: 'Code4Share - a platform for sharing code.'});
    }
  })

module.exports = router;
