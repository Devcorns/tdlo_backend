var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");

var profile = {
    
    search:function(callback) {
        
        db = mongoose.connection;
        var companyData = mongoose.model('company_profile', {name:String});
        companyData.find({},function(err, data){
            if (err) return handleError(err);        
            dbConfig.close();
            callback(data);
        });

        
        
    }

}

module.exports = profile;