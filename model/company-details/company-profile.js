//var mongoose = require("mongoose");
var chkProf = require("./../company-details/check-profile");
//var addProf = require("./../company-details/add-profile");

var companyProfile = {
    
    checkProfile : function(data,params) {
        console.log("I am console",Object.values(params.query).join('').toString());
        chkProf.search(data,params);

    },

    addProfile : function(e) {

        //return addProf.setProfile(e);

    }

}

module.exports = companyProfile;