var path = require('path');
var express = require('express');
var app = express();
var router = express.Router();

// app.all('/*', function(req, res, next) {

//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello');
});

router.post('/login', function(req, res, next) {
  res.send({"name":"Prakhar"});
  //res.end({ a: 1 });
  //console.log(res)
});

router.get('/auth/login', function(req, res, next) {
  res.send('Inside auth Login');
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.resolve('views/auth/register.html'));
});

//app.use('/api', router);



module.exports = router;
