const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const themeSchema = new Schema({
    user: {type: ObjectId, ref: "User"},
    name:{type:String},
    description:{type:String},
    primaryColor:{type:String},
    secondaryColor:{type:String},
    ternaryColor:{type:String},
    fourthColor:{type:String},
    background:{type:String},
    text:{type:String}, 
    secondaryText:{type:String}
})

const thememodel = mongoose.model("theme" , themeSchema)

module.exports = thememodel
 