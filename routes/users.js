var express = require('express');
var router = express.Router();

//var dbConfig = require("./../model/dbconfig");
var cmpnyLst = require("./../model/company-details/company-profile");

/* GET users listing. */
router.get('/companyList', function(req, res, next) {

    //dbConfig.connect();
    //cmpnyLst.checkProfile();
    cmpnyLst.checkProfile(async function(data) {
        
        console.log(Object.values(req.query).join(''));
        await res.send(data);
    });
    

});


module.exports = router;
