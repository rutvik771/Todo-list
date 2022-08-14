const mongoose=require("mongoose");

let ReminderSchema = new mongoose.Schema({
    reminderId:{
        type:String
    },
    reminderName:{
        type:String
    },
    reminderType:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    list:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"list",
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task",
    }

});

const ReminderModel = mongoose.model("Reminder",ReminderSchema)
module.exports = ReminderModel;