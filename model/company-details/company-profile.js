//var mongoose = require("mongoose");
var chkProf = require("./../company-details/check-profile");
//var addProf = require("./../company-details/add-profile");

var companyProfile = {
    
    checkProfile : function(data) {
        //console.log("I am console");
        chkProf.search(data);

    },

    addProfile : function(e) {

        //return addProf.setProfile(e);

    }

}

module.exports = companyProfile;