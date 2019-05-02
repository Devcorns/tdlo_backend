var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var company_profile = new Schema({
   name:String
});

module.exports = mongoose.model('company_profile');