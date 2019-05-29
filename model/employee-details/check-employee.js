var mongoose = require("mongoose");
var dbConfig = require("./../dbconfig");
var employeeCollection;


var searchProfile = {
    
    search:function(callBackFunc, getApiData) {
        
        dbConfig.connect();
        var db = dbConfig.getMongooseConnection();
            
            /*
                //Best suitable insertion example

                const tableNameObject = mongoose.model('Tablename', { name: String });

                const tableData = new tableNameObject({ name: 'Zildjian' });
                
                tableData.save().then(() => console.log('meow')); 
                
            */

        // Mongoose model compiled once issue generated so we use try here so we use try to handle this issue    
         try {

            employeeCollection = mongoose.model('emp_profiles', { mobile : Number }, 'emp_profiles');
            // console.log("Check Employee js ");
            chkData();

         } catch (error) {

            employeeCollection = mongoose.model('emp_profiles');
            chkData();

         }

         function chkData() {

            console.log(getApiData.query.search_term);

            employeeCollection.find({ "mobile": getApiData.query.search_term }, (err, data) => {

                if( data.length ) {
                    callBackFunc({ "message": data, status: true });
                } else {
                    callBackFunc({ "message": data, status: false })
                }
                

            })

            //   new employeeCollection({

            //         fname:"", 
            //         mobile: params.query.search_term,
            //         last: "afsdsdaf", 
            //         designation: "asfdsfda", 
            //         Experience: "asdfsfda", 
            //         empMobile: "99999999999" 

            //   }).save(function (err, data) {

            //      if (err) return console.error(err);
            //      console.log(data + " saved to Employee collection.");
            //     callback({message:params.query.search_term});

            //   });

          }
    }

}

module.exports = searchProfile;