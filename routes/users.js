var express = require('express');
var router = express.Router();

var dbConfig = require("./../model/dbconfig");
var cmpnyLst = require("./../model/company-details/company-profile");

/* GET users listing. */
router.get('/companyList', function(req, res, next) {

    dbConfig.connect();
    //cmpnyLst.checkProfile();
    res.send(cmpnyLst.checkProfile());

});


module.exports = router;
