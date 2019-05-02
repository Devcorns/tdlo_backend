var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var dbConfig = {
    url: "mongodb://localhost:27017/ep-rat",
    getMongooseConnection: function(){
        return mongoose.connection;
    },
    connect: function() {
        mongoose.connect(dbConfig.url, { useNewUrlParser: true });
    },
    close: function() {
        mongoose.connection.close();
    }
}

module.exports = dbConfig;