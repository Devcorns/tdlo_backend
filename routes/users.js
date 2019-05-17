var express = require('express');
var router = express.Router();

//var dbConfig = require("./../model/dbconfig");
var cmpnyLst = require("./../model/company-details/company-profile");
var empLst = require("./../model/employee-details/add-employee");

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

router.get('/searchEmployeeProfile', function(req, res, next) {

    empLst.searchEmployeeProfile(function(data) {
         res.send(data);
    },req);
    

});

module.exports = router;
