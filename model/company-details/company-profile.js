var mongoose = require("mongoose");
var check = require("./../company-details/check-profile");

var companyProfile = {
    
    checkProfile : function(e) {

        return check.search(e);
    },

    addProfile : function(e) {

        //console.log(e)
    }

}

module.exports = companyProfile;