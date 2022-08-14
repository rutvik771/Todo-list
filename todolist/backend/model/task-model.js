const mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    taskName:{
        type:String,
    },
    completed_taskName:{
        type:Boolean,
        default:false
    },
});

const TaskModel = mongoose.model("task",TaskSchema)
module.exports = TaskModel;