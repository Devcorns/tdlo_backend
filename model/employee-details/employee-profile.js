//var mongoose = require("mongoose");

var chkProf = require("./../employee-details/check-employee");
var viewProf = require("./../company-details/view-profile");
var addEmp = require("./../employee-details/add-employee");

var employee = {
    
    checkProfile : function(callBackFunc,getApiData) {
        console.log("I am checkprofile");
        chkProf.search(callBackFunc,getApiData);
    },

    viewProfile : function(data,params) {
        console.log("I am viewProfile",params);
        viewProf.get(data,params);
    },

    setProfile : function(callBackFunc,empLoyeeData) {
        //console.log("I am setProfile",params);
        addEmp.set(callBackFunc,empLoyeeData);
    }

}

module.exports = employee;