var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Synaptop Chat' });
});

router.get('/login',function(req,res){
  res.render('login',{title: 'Login Page'});
});

router.post('/login',function(req,res){
  models.User.findAll({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(function(user){
    if (user.length === 0){
      res.redirect('/login');
    }else {
      res.render('chat',{data: user});
    }
  });
});


module.exports = router;
