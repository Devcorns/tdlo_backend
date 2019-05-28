//var mongoose = require("mongoose");
var chkProf = require("./../employee-details/check-employee");
var viewProf = require("./../company-details/view-profile");
var addEmp = require("./../employee-details/add-employee");

var employee = {
    
    checkProfile : function(data,params) {
        console.log("I am checkprofile",Object.values(params.query).join('').toString());
        chkProf.search(data,params);
    },

    viewProfile : function(data,params) {
        console.log("I am viewProfile",params);
        viewProf.get(data,params);
    },

    setProfile : function(data,params) {
        //console.log("I am setProfile",params);
        addEmp.set(data,params);
    }

}

module.exports = employee;