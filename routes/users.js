var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/baseinfo', function(req, res, next) {
  console.log(req,res,next);
  res.send('respond with a resource');
});


module.exports = router;
