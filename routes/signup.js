var express = require('express');
var router = express.Router();

/* GET user signup form listing. */
router.get('/', function(req, res, next) {
  res.render('signup',{ title: 'Sign up'});
});

router.post('/',function(req,res,next){
  res.send(req.headers);
});

module.exports = router;