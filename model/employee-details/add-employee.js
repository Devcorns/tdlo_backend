var mongoose = require("mongoose");

var dbConfig = require("./../dbconfig");
var employeeCollection;


var setProfile = {
    
    set:function(callBackFunc,dataByApi) {
        
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

            employeeCollection = mongoose.model('emp_profiles', {fname:String,lname:String,designation:String,exp:{type:Number},mobile : {type:Number,unique:true},countryCode:Number,rating:Number},'emp_profiles');
            // console.log("Add Employee .js ", params.query);
            setData();

         } catch (error) {

            employeeCollection = mongoose.model('emp_profiles');
            setData();

         }

         function setData() {

              console.log("data by api",dataByApi);
              
              new employeeCollection({

                     fname: dataByApi.fname,
                     lname: dataByApi.last,
                     designation: dataByApi.designation,
                     exp: dataByApi.Experience,
                     countryCode: dataByApi.cntryCode,
                     mobile: dataByApi.empMobile,
                     rating: dataByApi.rating
                 
              }).save(function (err, data) {

                 if (err) return console.error(err,callBackFunc({"message":dataByApi, "status":false}));
                 console.log(data + " saved to Employee collection.");
                 callBackFunc({"message":dataByApi, "status":true});

              });
        
        
            
          }
    }

}

module.exports = setProfile;