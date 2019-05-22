var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var employeeCollection;
var setProfile = {
    
    set:function(callback,params) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
        
        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
        try {

            console.log("INslide Add Employee .js ", params.query.search_term);
            employeeCollection = mongoose.model('emp_profile', {mobile : Number}, 'emp_profile');
            setData();

        } catch (error) {

           // console.log(error)
           employeeCollection = new mongoose.model('emp_profile');
            setData();

        }

        function setData() {

            var k = params.query.search_term;
             callback("add-employee.js ", "params.query.search_term => ", typeof params.query.search_term, "companyData =>", employeeData);
             employeeCollection.save( { "mobile":9716273125 }, function (err, data) {
                if (err) return console.error(err);
                console.log(data.name + " saved to Employee collection.");
                callback(data);
              });

            //  employeeCollection.insertOne({"mobile":params.query.search_term},function(err, data) {
            //    // if (err) return handleError(err);
            //     dbConfig.close();
            //     callback(data);
            // });

            
        }
    }

}

module.exports = setProfile;