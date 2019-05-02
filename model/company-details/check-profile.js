var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;
var profile = {
    
    search:function(callback) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        

        try {
            // Mongoose model compiled once so we use try to handle this issue    
            companyData = mongoose.model('company_profile', {name:String},'company_profile');
            findData();
            
        } catch (error) {
            
             findData();
        }


        function findData() {

            companyData.find({}, function(err, data) {
                if (err) return handleError(err);
                dbConfig.close();
                console.log(data)
                callback(data);
            });

        }
     
        
        
       

        
        
    }

}

module.exports = profile;