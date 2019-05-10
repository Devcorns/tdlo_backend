//var mongoose = require("mongoose");
var chkProf = require("./../company-details/check-profile");
var viewProf = require("./../company-details/view-profile");

var companyProfile = {
    
    checkProfile : function(data,params) {
        console.log("I am checkprofile",Object.values(params.query).join('').toString());
        chkProf.search(data,params);

    },

    viewProfile : function(data,params) {
        console.log("I am viewProfile",params);
        viewProf.get(data,params);
    }

}

module.exports = companyProfile;