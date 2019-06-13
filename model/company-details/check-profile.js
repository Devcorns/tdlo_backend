var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;
var profile = {
    
    search: function(callback,params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
        try {
            
            companyData = mongoose.model('company_profile', {companyName:String},'company_profile');
            findData();
            
        } catch (error) {
                
             findData();
        }
        function findData() {
            console.log(" Get ISG ",params.query.search_term);
            companyData.find({"name":params.query.search_term},function(err, data) {
                if (err) return handleError(err);
                dbConfig.close();
                callback(data);
            });
        }
    },
    searchByInner: function(data, callBackFunc) {
        
        try {
            companyData = mongoose.model('company_profile', {companyName: String},'company_profile');
            findData();
        } catch (error) {
            companyData = new mongoose.model('company_profile');
             findData();
        }
        
        function findData() {

            console.log(" Get ISG ",data,companyData);
            companyData.find({"contactNo": data}, function(err, val) {

                if (err) return handleError(err);
                callBackFunc(val.length);

            });

        }
        
    }

}

module.exports = profile;