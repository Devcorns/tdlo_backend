var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;

var addCompanyProfile = {
    
    set:function(callback,params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        console.log("Set Profile Called");

        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue
        try {
            console.log("INslide view addCompanyProfile .js ",params);
            // companyData = mongoose.model('company_profile', {name:String},'company_profile');
            // addCompanyProfile();
        } catch (error) {
            console.log(error)
            // companyData = new mongoose.model('company_profile');
            // addCompanyProfile();
        }

        function addCompanyProfile() {
            var k = params.query.search_term;
            console.log(" Get ISG in viewprofile.js ","params.query.search_term => ",typeof params.query.search_term,"companyData =>",companyData);
            
            companyData.findOne({"_id":params.query.search_term}, function(err, data) {
               // if (err) return handleError(err);
                dbConfig.close();
                callback(data);
            });
            
        }
    }

}

module.exports = addCompanyProfile;