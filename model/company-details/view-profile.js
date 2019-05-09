var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;
var viewProfile = {
    
    get:function(callback,params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
        try {
            console.log("INslide view profile .js ",params.query);
            companyData = mongoose.model('company_profile', {name:String},'company_profile');
            viewData();
            
            
        } catch (error) {
                
             viewData();
        }
        function viewData() {
            console.log(" Get ISG ",Object.values(params.query).join('').toString());
            companyData.find({"_id":Object.values(params.query).join('').toString()},function(err, data) {
                if (err) return handleError(err);
                dbConfig.close();
                callback(data);
            });
        }
    }

}

module.exports = viewProfile;