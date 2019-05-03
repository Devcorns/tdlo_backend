var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;
var profile = {
    
    search:function(callback) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
        try {
            
            companyData = mongoose.model('company_profile', {name:String},'company_profile');
            findData();
            
        } catch (error) {
                
             findData();
        }
        function findData() {
            companyData.find({name}, function(err, data) {
                if (err) return handleError(err);
                dbConfig.close();
                //console.log(data)
                callback(data);
            });
        }
    }

}

module.exports = profile;