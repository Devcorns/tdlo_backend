//var mongoose = require("mongoose");
var chkProf = require("./../employee-details/check-employee");
var viewProf = require("./../company-details/view-profile");

var employeeProfile = {
    
    checkProfile : function(data,params) {
        console.log("I am checkprofile",Object.values(params.query).join('').toString());
        chkProf.search(data,params);

    },

    viewProfile : function(data,params) {
        console.log("I am viewProfile",params);
        viewProf.get(data,params);
    },

    addProfile : function(data,params) {
        console.log("I am addProfile",params);
        viewProf.get(data,params);
    }

}

module.exports = companyProfile;