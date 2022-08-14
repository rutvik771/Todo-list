const mongoose = require("mongoose");

let RoleSchema = new mongoose.Schema({
 
  roleId:{
    type:String,
  },
 
  roleName: {
    type: String,
  },
});


let RoleModel = mongoose.model("role", RoleSchema);

module.exports = RoleModel; 