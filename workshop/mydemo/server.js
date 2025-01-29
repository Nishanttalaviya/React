const bodyparser=require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const bookRoute = require("./src/Routes/book.route");

mongoose
.connect("mongodb+srv://Nishant:talaviya@cluster0.5zgwy.mongodb.net")
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log("Error",err);  
});
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/api",bookRoute);
app.listen(3000,()=>{
    console.log('Server is running on port 3000'); 
});


