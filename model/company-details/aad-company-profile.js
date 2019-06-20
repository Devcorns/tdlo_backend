var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");

var chkCmpny = require("./check-profile");

var companyData;

var addCompanyProfile = {
    
    set:function(callback, params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        console.log("Set Profile Called");
        // callback(params)
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue
        try {
            console.log("INslide view addCompanyProfile .js ",params);
             companyData = mongoose.model('company_profile', {companyName:String, comapnyCategory:String,countryCode:Number, stateCode:Number, contactNo:Number, companyAddr:String},'company_profile');

         
             addCompanyProfile();
        } catch (error) {
            console.log(error)
            companyData = new mongoose.model('company_profile');
            addCompanyProfile();
        }

        function addCompanyProfile() {
            
            console.log(" Get ISG in add company profile .js ",params);

            let saveData = function (val) {
                console.log("value of val",val);
                if(!val) {
                    console.log("params")
                    var cd = new companyData(params);
                    cd.save(function (err, data) {
                        if (err) return console.error(err);
                        console.log(data)
                        callback(data);

                    });
                    //callback(params);
                }
                else {
                    callback({ exist: true });
                }
               
            }

            chkCmpny.searchByInner(params.contactNo, saveData);
           
            
            // companyData.insert({"companyMobile":params.comapnyCategory}, function(err, data) {
            //    // if (err) return handleError(err);
            //     console.log("Company data find one",data)
            //     dbConfig.close();
            //     callback(data);
            // });
            
            



        }
    }

}

module.exports = addCompanyProfile;