var express = require('express');
var router = express.Router();

//var dbConfig = require("./../model/dbconfig");
var cmpnyLst = require("./../model/company-details/company-profile");
var empLst = require("./../model/employee-details/employee-profile");

/* GET users listing. */
router.get('/companyList', function(req, res, next) {

    cmpnyLst.checkProfile(function(data) {
         res.send(data);
    },req);
    

});
router.get('/get-company-details', function(req, res, next) {

    cmpnyLst.viewProfile(function(data) {
         res.send(data);
    },req);
    

});

router.get('/search-employee', function(req, res, next) {

    empLst.checkProfile(function(data) {
         res.send(data);
    },req);
    

});

router.post('/add-employee', function(req, res, next) {
    console.log("add-employee called",req.body);
    //res.send("add-employee called");
    empLst.setProfile(function(data) {
         res.send(data);
    },req);
});


module.exports = router;
