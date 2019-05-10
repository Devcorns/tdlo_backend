var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var company_profile = new Schema({
   name:String
});

module.exports = mongoose.model('company_profile');

// db.company_profile.insertOne({
	
// 	"name":"DC",
// 	"strength":17,
// 	"origin":2017,
//    "dept":{"it":6,"acct":5,"hr":2,"mngr":3,"ownr":1},
//    "tech":['Node','PhP','MongoDB','Javascript','Android','Angular'],
// 	"empList":['Empid1','Empid2'],
// 	"size":'Small',
// 	"location":'noida',
// 	"Nation":'india',
// 	"type":'local'
	

// })