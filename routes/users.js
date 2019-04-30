var express = require('express');
var router = express.Router();

var dbConfig = require("./../model/dbconfig");
var cmpnyLst = require("./../model/company-profile");

/* GET users listing. */
router.get('/companyList', function(req, res, next) {
    dbConfig.connect();
    cmpnyLst.checkProfile();
  //console.log(req,res,next);
  //dbConfig.close();
  res.send({"CompanyList":"Prakhar"}); 
});


module.exports = router;
