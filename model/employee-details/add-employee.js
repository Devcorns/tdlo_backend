var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var employeeData;
var viewProfile = {
    
    addProfile:function(callback,params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
        try {

            console.log("INslide Add Employee .js ", params.query.search_term);
            //employeeData = mongoose.model('company_profile', {name : String}, 'company_profile');
            viewData();

        } catch (error) {

           // console.log(error)
           // employeeData = new mongoose.model('company_profile');
            viewData();

        }

        function viewData() {

            var k = params.query.search_term;
             callback(" Get ISG in viewprofile .js ", "params.query.search_term => ", typeof params.query.search_term, "companyData =>", employeeData);
            // employeeData.findOne({"_id":params.query.search_term},function(err, data) {
            //    // if (err) return handleError(err);
            //     dbConfig.close();
            //     callback(data);
            // });

            
        }
    }

}

module.exports = viewProfile;