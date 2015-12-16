var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET user signup form listing. */
router.get('/', function(req, res, next) {
  res.render('signup',{ title: 'Sign up'});
});

router.post('/',function(req,res,next){
  // real world example would include validations! email uniqueness,password etc.
  models.User.findAll({
    where: {
      email: req.body.email
    }
  }).then(function(data){
    if (data.length !== 0){
      res.send({message: 'User exists!'});
    } else {
      models.User.create({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
    }
  }).then(function(user){
      res.render('chat',{data: user});
  }).catch(function(err){
    console.log(err);
  });
});

module.exports = router;
