const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      "mongodb+srv://mrinal-auth:mrinal123@cluster0.q7jbg.mongodb.net/?retryWrites=true&w=majority"
    );
    // mongoose.connect("mongodb://masaiUser:masaipassword@localhost:27017/masai"); //this is for localdatabase
    // "mongodb+srv://saurabh24:0vIgrRY33DtOX3ok@cluster0.3nbnv.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
