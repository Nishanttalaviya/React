const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:{type:"string"},
    qty:{type:Number},
});
module.exports = mongoose.model("Books",bookSchema);