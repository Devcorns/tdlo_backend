var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var companyProfile = {
    
    checkProfile : function(e){
        console.log(e);
    },

    addProfile : function(e) {
        console.log(e)
    }

}

module.exports = companyProfile;