
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


let app = require("./config/express");
let debug = require("debug")("myapp:server");
let http = require("http");



// Create an Express app

const Routes = express.Router();
const productRoutes = require('./Routes/index');
// Middleware
app.use(express.json()); 
app.use(cors()); 


//database

module.exports = function () {
  mongoose.connect(config.ATLASDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error: "));
  mongodb.once("open", () => {
    console.log("====> Connected to MongoDB.");
  });
  return mongodb;
};



app.listen(8081,()=>{
    console.log("Server is running on 8081 http://localhost:8081/");
});

