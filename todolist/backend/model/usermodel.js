const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

let userSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    name:{
        type:String,
    },
    email :{
        type:String,
        required:true,
    },
    password :{
        type: String,
        required:true,
    },
    dateofbirth:{
        type:String,
    },
   gender:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
   },
});

// userSchema.plugin(AutoIncrement, {inc_field: 'userId'});
const UserModel= mongoose.model("user", userSchema);
module.exports = UserModel;