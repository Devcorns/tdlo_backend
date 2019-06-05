var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var companyData;

var addCompanyProfile = {
    
    set:function(callback, params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        console.log("Set Profile Called");
        //callback(params)
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue
        try {
            console.log("INslide view addCompanyProfile .js ",params);
             companyData = mongoose.model('company_profile', {name:String},'company_profile');
             addCompanyProfile();
        } catch (error) {
            console.log(error)
            companyData = new mongoose.model('company_profile');
            addCompanyProfile();
        }

        function addCompanyProfile() {
            
            console.log(" Get ISG in viewprofile.js ", "companyData =>",companyData);
            
            companyData.findOne({"companyMobile":params.companyMobile}, function(err, data) {
               // if (err) return handleError(err);
                console.log("Company data find one",data)
                dbConfig.close();
                callback(data);
            });
            
        }
    }

}

module.exports = addCompanyProfile;